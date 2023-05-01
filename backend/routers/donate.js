const express = require("express");
const cors = require("cors")
const donateRouter = new express.Router();

const NewDonate = require("../models/donates.js")

donateRouter.post("/donation", async (req, res) => {
  try {
    const addDonations = new NewDonate(req.body);
    console.log(req.body);
    const insertDonations = await addDonations.save();
    res.status(201).send(insertDonations);
  } catch (e) {
    console.log(e)
    res.status(400).send(e);

  }
});

//  Get Req
donateRouter.get("/donation", async (req, res) => {
  try {

    
    const getDonations = await NewDonate.find({});
    

    res.send(getDonations);
  } catch (e) {
    res.status(400).send(e);
  }
});
// Get by individual
donateRouter.get("/donation/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getDonation = await NewDonate.findById(_id);

    res.send(getDonation);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Update Individual by Patch

donateRouter.patch("/donation/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getDonation = await NewDonate.findByIdAndUpdate(_id, req.body, {
      new: true,
    });

    res.send(getDonation);
  } catch (e) {
    res.status(500).send(e);
  }
});

// delete
donateRouter.delete("/donation/:id", async (req, res) => {
  try {
    const getDonation = await NewDonate.findByIdAndDelete(req.params.id);

    res.send(getDonation);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = donateRouter;
