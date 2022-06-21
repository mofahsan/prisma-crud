const { PrismaClient } = require('@prisma/client');
var express = require('express');
var router = express.Router();
const prisma=new PrismaClient()

// GET home page
router.get('/', function(req, res, next) {
 res.render('index', { title: 'Express' });
});


//Add a user
router.post("/",async(req,res,next)=>{
  try{
    let data={
      data:req.body
    }
    const user=await prisma.user.create(data)
  
    if(user){
      res.status(200).send({
        success:true,
        message:"user inserted successfully",
        data:user
      })
    }else{
      res.status(400).send({
        success:false,
        message:"user not inserted ",
      })
    }
  }
  catch(err){
    res.status(500).send({
      success:false,
      message:"An error Occurred ",
    })
  }
})

// Get All Users
router.get("/all",async(req,res)=>{
  try{
    const data=await prisma.user.findMany()
    if(Object.keys(data).length){
      res.status(200).send({
        success:true,
        message:"Users Found ",
        data:data
      })
    }
    else{
      res.status(400).send({
        success:false,
        message:"Users not Found ",
      })
    }
  }
  catch(err){
    res.status(500).send({
      success:false,
      message:"An error occurred",
    })
  }
})

router.get("/getone",async(req,res)=>{
  try{
    let user=await prisma.user.findFirst({
      where:{
        id:parseInt(req.query.id)
      }
    })
    if(user==null){
      res.status(400).send({
        success:false,
        message:"Could Not find with given Id",
      })
    }
    else{
      res.status(200).send({
        success:true,
        message:"User Found",
        data:user
      })
    }
  }
  catch(err){
    res.status(500).send({
      success:false,
      message:"An error occurred",
    })
  }
})

//Update a User
router.put("/",async(req,res)=>{
    try{
      let update=await prisma.user.update({
        where:{
          id:parseInt(req.query.id),
        },
        data:req.body
      })

      if(update){
        res.status(200).send({
          success:true,
          message:"Record successfully edited",
          data:update
        })
      }else{
        res.status(400).send({
          success:false,
          message:"Record not updated",
        })
      }
    } 
    catch(err){
      res.status(500).send({
        success:false,
        message:"An error occurred ",
      })
    }   
})

//Delete a user
router.delete("/",async(req,res,next)=>{
  try{
    let record=await prisma.user.delete({
      where:{
        id:parseInt(req.query.id)
      }
    })
    if(record){
      res.send({
        message:"User deleted successfully",
        data:record})
    }
    else{
      res.status(400).send({
        success:false,
        message:"User not deleted check given Id ",
      })
    }
  }
  catch(err){
    res.status(500).send({
      success:false,
      message:"An error occurred ",
    })
  }
})

module.exports = router;
