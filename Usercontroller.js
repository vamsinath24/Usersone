var mongodb=require('mongodb');
var mongoose=require('mongoose'); 
var User=require('../models/usermodel');
var cors=require('cors');
var Objectid=mongodb.ObjectID;
exports.user_create=function(req,res)
{
    let user=new User(
        {
            name:req.body.name,
            pass:req.body.pass,
            phone:req.body.phone,
            email:req.body.email,
            department:req.body.department,
            location:req.body.location
        });
    user.save(function(err,resp)
    {
        if(err)
            res.json(err);
        else
          res.json("User created Successfully");     
    })
}
exports.alluser_details=function(req,res)
{
    User.find(function(err,resp)
    {
        if(err)
            res.json(err);
        else
           res.json(resp);
          
    })
}
exports.user_details=function(req,res)
{
    User.findById(req.params.id,function(err,resp)
    {
        if(err)
            res.json(err);
        else
            res.json(resp);
            
    })
}
exports.user_update=function(req,res)
{
    User.findByIdAndUpdate(req.params.id,{$set:req.body},function(err,resp)
    {
        if(err)
            res.json(err);
        else   
            res.json("User update successfully");
            
    })
}
exports.user_delete=function(req,res)
{
    User.findByIdAndRemove(req.params.id,function(err,resp)
    {
        if(err)
            res.json(err);
         else
            res.json("User deleted Successfully");
            
    })
}