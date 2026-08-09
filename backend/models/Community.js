const mongoose = require("mongoose");


const communitySchema = new mongoose.Schema({

name:{
    type:String,
    required:true
},

email:{
    type:String,
    required:true
},

city:{
    type:String,
    required:true
},

gardenType:{
    type:String,
    required:true
},

experience:{
    type:String,
    required:true
},

image:{
    type:String,
    default:""
},

rating:{
    type:Number,
    default:5
}


});


module.exports = mongoose.model(
"Community",
communitySchema
);