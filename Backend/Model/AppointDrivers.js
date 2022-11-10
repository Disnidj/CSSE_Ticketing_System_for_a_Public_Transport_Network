const mongoose = require('mongoose');

const DriversSchema = new mongoose.Schema({

    RouteNo:{
    type:String,
    required:true
    },

    BusNumber:{
    type:String,
    required:true
    },

    DriverID:{
    type:String,
    required:true
    },

    DriverName:{
    type:String,
    required:true
    },

    InspectorID:{
    type:String,
    required:true
    },

    InspectorName:{
    type:String,
    required:true
    },

    Availability:{
    type:String,
    required:true
    }

   



   

 


});

module.exports = mongoose.model('AppointDrivers',DriversSchema);