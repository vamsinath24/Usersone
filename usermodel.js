var mongoose = require('mongoose');
var Schema=mongoose.Schema;
let UserSchema=new Schema(
{
	name:{type:String,required:true,max:100},
	pass:{type:String,required:true,max:100},
	phone:{type:Number,required:true,unique:true},
	email:{type:String,required:true,unique:true,max:100},
	department:{type:String,required:true,max:100},
	location:{type:String,required:true,max:100}
});
module.exports=mongoose.model('User',UserSchema);
