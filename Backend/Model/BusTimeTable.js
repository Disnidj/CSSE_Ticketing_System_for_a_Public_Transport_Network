const mongoose = require('mongoose');

const TimetableSchema = new mongoose.Schema({

    RouteNo:{
    type:String,
    required:true
    },

    RouteName:{
    type:String,
    required:true
    },

    DepartureFrom:{
    type:String,
    required:true
    },

    DestinationTo:{
    type:String,
    required:true
    },

    Start:{
    type:String,
    required:true
    },

    End:{
    type:String,
    required:true
    }



   

 


});

module.exports = mongoose.model('BusTimetables',TimetableSchema);