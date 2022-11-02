const express = require('express');
const appointdriver = require('../Model/AppointDrivers');
const AppointDriver = require('../Model/AppointDrivers');

const router = express.Router();

//add Time tables 

router.post('/AppointDriver/save',(req,res)=>{

    let newDriver = new AppointDriver(req.body);

    newDriver.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Add time table successfully"
        });
    });
});

//get time table
router.get('/AppointDriver',(req ,res) =>{
    AppointDriver.find().exec((err,appointdriver) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingAppointDriver:appointdriver
        });
    });
});

//update the time table

router.put('/AppointDriver/update/:id',(req,res)=>{
    AppointDriver.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, appointdriver) =>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});


//delete the time table
router.delete('/AppointDriver/delete/:id',(req,res)=>{
    AppointDriver.findByIdAndRemove(req.params.id).exec((err,deletedAppointDriver) => {

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfull",deletedAppointDriver
        });
    });
});


//get specific time table
router.get(`/AppointDriver/:id`,(req,res) =>{
    let AppointDriverId = req.params.id;
    AppointDriver.findById(AppointDriverId,(err,appointdriver)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            appointdriver
        });
    });
});


module.exports = router;