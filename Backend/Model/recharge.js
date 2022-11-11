//import mongoose

//create db schema
const mongoose = require('mongoose');
const chargeSchema = new mongoose.Schema({
    
    CardNo:{
        type:String,
        required:true
    },
    HolderName:{
        type:String,
        required:true
    },
    CreditCard:{
        type:String,
        required:true
    },
    Expire:{
        type:String,
        required:true
    },
    Amount:{
        type:Number,
        required:true
    },
    NewAmount:{
        type:Number,
        required:false
    },
    TotAmount:{
        type:Number,
        required:false
    }

    
    
});

module.exports = mongoose.model('Recharge', chargeSchema);