//import mongoose
const mongoose = require("mongoose");

//create db schema to store data
const TripSchema = new mongoose.Schema({
    Date:{
        type:String,
        require:true
    },
    Time:{
        type:String,
        require:true
    },
    StartPlace:{
        type:String,
        require:true
    },

    Destination:{
        type:String,
        require:true
    },

    BusType:{
        type:String,
        require:true
    },
    Fare:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model("Trip",TripSchema);