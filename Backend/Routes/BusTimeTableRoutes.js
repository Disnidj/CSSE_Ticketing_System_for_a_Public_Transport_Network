const express = require('express');
const bustimetable = require('../Model/BusTimeTable');
const BusTimetables = require('../Model/BusTimeTable');

const router = express.Router();

//add Time tables 

router.post('/BusTimetables/save',(req,res)=>{

    let newTable = new BusTimetables(req.body);

    newTable.save((err)=>{
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
router.get('/BusTimetables',(req ,res) =>{
    BusTimetables.find().exec((err,bustimetable) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingBusTimetables:bustimetable
        });
    });
});

//update the time table

router.put('/BusTimetables/update/:id',(req,res)=>{
    BusTimetables.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, bustimetable) =>{
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
router.delete('/BusTimetables/delete/:id',(req,res)=>{
    BusTimetables.findByIdAndRemove(req.params.id).exec((err,deletedBusTimetables) => {

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfull",deletedBusTimetables
        });
    });
});


//get specific time table
router.get(`/BusTimetables/:id`,(req,res) =>{
    let TimeTablesId = req.params.id;
    BusTimetables.findById(TimeTablesId,(err,bustimetable)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            bustimetable
        });
    });
});


module.exports = router;