const express = require("express");
const { default: mongoose } = require("mongoose");


const projectSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    bannerImage1: {
      data: Buffer,
      type: String,
    },
    bannerImage2: {
      data: Buffer,
      type: String,
    },
    bannerImage3: {
      data: Buffer,
      type: String,
    },
    linkedIn: {
      type: String,
    },
    google: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    youtube: {
      type: String,
    },
    minimumAmount: {
      type: String,
    },
    maximumAmount: {
      type: String,
    },
    
  });
  
  const Panel = mongoose.model("Panel", projectSchema);
  module.exports = Panel;
  