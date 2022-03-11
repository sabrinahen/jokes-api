const { MongoDriverError } = require("mongodb");
const Joke = require("../models/joke.model");

module.exports = {

    findAllJokes: (req, res)=>{
        Joke.find()
            .then((allJokes)=>{
                console.log(allJokes);
                res.json(allJokes)
            })
            .catch((err)=> {
                console.log("findAllJokes has failed!");
                res.json({message: "Something went wrong with findAll", error: err})
            })
    },

    creatNewJoke: (req, res)=>{
        Joke.create(req.body)
        .then((newJoke)=>{
            console.log(newJoke);
            res.json(newJoke)
        })
        .catch((err)=>{
            console.log("Something went wrong in createNewJoke!");
            res.status(400).json(err)
        })
    },

    findOneJoke: (req, res)=>{
        Joke.findOne({_id: req.params.id})
            .then((oneJoke)=>{
                console.log(oneJoke);
                res.json(oneJoke);
            })
            .catch((err)=>{
                console.log("findOneJoke has failed!");
                res.json({message: "Something went wrong with findOneJoke", error: err})
            })
    },
    deleteOneJoke: (req, res)=>{
        Joke.deleteOne({_id: req.params.id})
            .then((deletedJoke)=>{
                console.log(deletedJoke);
                res.json(deletedJoke);
            })
            .catch((err)=>{
                console.log("deleteOneJoke has failed!");
                res.json({message: "Something went wrong with deleteOneJoke", error: err})
            })
    },

    updateJoke: (req, res)=> {
        Joke.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true})
            .then((updatedJoke)=>{
                console.log(updatedJoke);
                res.json(updatedJoke);
            })
            .catch((err)=>{
                console.log("Something went wrong in updateJoke!");
                res.status(400).json(err)
            })
    }
}


