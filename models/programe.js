const mongoose =require('mongoose');

const programmetemps = mongoose.Schema({
 name:{
  type:String,
  required:[true ,"Entre votre nom"]
 },
 numero:{
  type:Number,
  require:true
 },
 date:{
  type:String,
  require:true
 },
 heur:{
  type:String,
  require:true
 }
},
{
 timestamps:true
})

const reservation = mongoose.model('reservation' , programmetemps);
module.exports = reservation;