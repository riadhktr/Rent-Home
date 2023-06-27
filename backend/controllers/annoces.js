
const Annonce = require('../models/annoceModel');
const mongoose = require('mongoose') 
exports.CreateAnnonce = async(req,res)=>{
    const {Name,City,Type,Price,message,Rooms} = req.body
    try{
     let newAnnonce = new Annonce({
        user: req.user.id,
        Name,City,Type,Price,message,Rooms
     });
      await  newAnnonce.save()
     res.status(200).json({msg:"annonce created",newAnnonce})
    }catch(err){
        res.status(500).json({msg:"annonce not created"})
    }
}
