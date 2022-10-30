//import express
const express =require("express")

//import models
const Trips = require("../Model/TripModels");

//Declare express routers to connect with functions
const router=express.Router();

//Add data

router.post('/trip/Save',(req,res)=>{
    let newTrip= new Trips(req.body);

    newTrip.save((err)=>{

        if(err){
        return res.status(400).json({
            error:err
        });
        }
        return res.status(200).json({
            success:"Data added Successfully"
        });
    });
});


//get all l

router.get("/GetAllTrips",(req,res)=>{
        Trips.find().exec((err,GetAll)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingData:GetAll
        });
    });
});

//get one 

router.get("/GetOneTrip/:id",(req,res)=>{
    let ReqID= req.params.id;

    Trips.findById(ReqID,(err,Onedata)=>{
        if(err){
            return res.status(400).json({
                success:false,
                err
            })
        }

        return res.status(200).json({
            success:true,
            Onedata
        });
    });

});

//update record

router.put("/UpdateTrip/:id",(req,res)=>{
    Trips.findByIdAndUpdate(
        req.params.id, {$set:req.body},
    (err,update)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
            
        }
        return res.status(200).json({
            success:"Updated Successfully"
        });
    });

});

//delete 

router.delete("/DeleteTrip/:id", (req,res)=>{
    Trips.findByIdAndRemove(req.params.id).exec((err,deletedData)=>{
        if(err){
            return res.status(400).json({
                message:"Delete was unsuccessful",err
            });
            
        }
        return res.json({
            message:"Deleted Successfully",deletedData
        });
    });
});

module.exports=router;





