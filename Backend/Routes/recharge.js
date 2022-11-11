const express = require('express');
const Recharge = require('../Model/recharge');

const router = express.Router();

//save posts
router.post('/postCharge/save',(req,res)=>{

    let newPost = new Recharge(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Post saved successfully"
        });
    });
});

//getpost
router.get('/postsCharge',(req,res)=>{
    Recharge.find().exec((err,postsCharge)=>{
        if(err){
            return res.status(400).json({
                error:err    
            });
        }
        return res.status(200).json({
            success:true,
            existingCharge:postsCharge
        });
    });
});

//get a specific post
router.get("/postCharge/:id",(req,res)=>{
    let chargeId = req.params.id;
    Recharge.findById(chargeId,(err,postCharge)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            postCharge
        });
    });
});


//update posts
router.put('/post/updateCharge/:id',(req,res)=>{
    Recharge.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,postCharge)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});

//delete posts

router.delete('/post/deleteCharge/:id',(req,res)=>{
    Recharge.findByIdAndRemove(req.params.id).exec((err,deletedCharge) => {

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });
        return res.json({
            message:"Delete Succesfull",deletedCharge
        });
    });
});


module.exports = router;