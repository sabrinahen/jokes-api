const mongoose = require("mongoose");

const jokeDB = "jokeDB";

mongoose.connect(`mongodb://localhost/jokeDB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log(`You are connected to the database called ${jokeDB}`)
    })
    .catch((err)=>{
        console.log(`You are having an issue connecting to ${jokeDB}`)
    })
