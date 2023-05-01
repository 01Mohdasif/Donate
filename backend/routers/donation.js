const express = require("express");
const cors = require("cors")
const router = new express.Router();
const Donate = require("../models/donations.js");

router.post("/donations", async (req, res) => {
  try {
    const addDonations = new Donate(req.body);
    console.log(req.body);
    const insertDonations = await addDonations.save();
    res.status(201).send(insertDonations);
  } catch (e) {
    console.log(e)
    res.status(400).send(e);

  }
});
// router.post("/donations", async (req, res) => {
//   try {
//     // Check if email is already registered
//     const existingEmailDonation = await Donate.findOne({ email: req.body.email });
//     if (existingEmailDonation) {
//       return res.status(400).send({ error: "Email is already registered" });
//     }

//     // Check if pan is already registered
//     const existingPanDonation = await Donate.findOne({ pan: req.body.pan });
//     if (existingPanDonation) {
//       return res.status(400).send({ error: "Pan is already registered" });
//     }

//     const addDonations = new Donate(req.body);
//     console.log(req.body);
//     const insertDonations = await addDonations.save();
//     res.status(201).send(insertDonations);
//   } catch (e) {
//     console.log(e)
//     res.status(400).send(e);

//   }
// });

//  Get Req
router.get("/donations", async (req, res) => {
  try {

    
    const getDonations = await Donate.find({});
    

    res.send(getDonations);
  } catch (e) {
    res.status(400).send(e);
  }
});
// Get by individual
router.get("/donations/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getDonation = await Donate.findById(_id);

    res.send(getDonation);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Update Individual by Patch

router.patch("/donations/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getDonation = await Donate.findByIdAndUpdate(_id, req.body, {
      new: true,
    });

    res.send(getDonation);
  } catch (e) {
    res.status(500).send(e);
  }
});

// delete
router.delete("/donations/:id", async (req, res) => {
  try {
    const getDonation = await Donate.findByIdAndDelete(req.params.id);

    res.send(getDonation);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
