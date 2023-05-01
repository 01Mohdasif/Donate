const express = require("express");
const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // unique:true,
  },
  password:{
    type: String,
    required:true,
  },
  token:{
    type : String,
  },

   
    // toJSON:{
    //   transform(doc,ret){
    //     delete ret.password;
    //   },
    // }
   

});

userSchema.set('toJSON', {
  transform: (doc,ret)=>{
    delete ret.password
  }
})

const User = new mongoose.model("User", userSchema);
module.exports=User;