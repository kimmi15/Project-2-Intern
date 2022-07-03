// - Intern Model
// ```
// { name: {mandatory},
//  email: {mandatory, valid email, unique},
//   mobile: {mandatory, valid mobile number, unique},
//  collegeId: {ObjectId, ref to college model,
//    isDeleted: {boolean, default: false}}

const mongoose=require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId
const newIntern=new mongoose.Schema({
name:{type:String,
  required:true,
  trim:true,
},
email:{type:String,
required:true,
uinque:true
},
collegeId:{
  type:ObjectId,
  ref:"colleges",
  required:true
},
isDeleted:{
  type:Boolean,
  default:false
}

},{timestamps:true})
module.exports=mongoose.model("Intern",newIntern)