const express = require("express");
const cors = require("cors");
const projectRouter = new express.Router();
const Panel = require("../models/projects");
const multer = require("multer");
const path = require("path");

// Define storage for the uploaded files
const storage = multer.memoryStorage();

// Create an instance of the multer middleware with the defined storage options
const upload = multer({ storage });

// Serve static files such as images
const app = express();
app.use(express.static(path.join(__dirname, "../uploads")));

projectRouter.post(
  "/projects",
  upload.fields([
    { name: "bannerImage1", maxCount: 1 },
    { name: "bannerImage2", maxCount: 1 },
    { name: "bannerImage3", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      // Set the uploaded files as the data of the corresponding fields
      const addAdmins = new Panel({
        name: req.body.name,
        title: req.body.title,
        description: req.body.description,
        linkedIn: req.body.linkedIn,
        google: req.body.google,
        twitter: req.body.twitter,
        facebook: req.body.facebook,
        youtube: req.body.youtube,
        minimumAmount: req.body.minimumAmount,
        maximumAmount: req.body.maximumAmount,
        // isActive: req.body.isActive,
        // uniqUUID: req.body.uniqUUID,
        bannerImage1: {
          data: req.files["bannerImage1"][0].buffer,
          contentType: req.files["bannerImage1"][0].mimetype,
        },
        bannerImage2: {
          data: req.files["bannerImage2"][0].buffer,
          contentType: req.files["bannerImage2"][0].mimetype,
        },
        bannerImage3: {
          data: req.files["bannerImage3"][0].buffer,
          contentType: req.files["bannerImage3"][0].mimetype,
        },
      });
      const insertAdmins = await addAdmins.save();
      res.status(201).send(insertAdmins);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
);

projectRouter.get("/projects", async (req, res) => {
  try {
    const getAdmins = await Panel.find({});
    res.send(getAdmins);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

projectRouter.get("/projects/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getAdmins = await Panel.findById(_id);
    res.send(getAdmins);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Display image in backend
projectRouter.get("/images/:filename", async (req, res) => {
  const filename = req.params.filename;
  res.sendFile(path.join(__dirname, `../public/${filename}`));
});

projectRouter.patch("/projects/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getAdmins = await Panel.findByIdAndUpdate(_id, req.body, {
            new: true,
        });
        res.send(getAdmins);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})

projectRouter.delete("/projects/:id", async (req, res) => {
    try {
        const getAdmins = await Panel.findByIdAndDelete(req.params.id);
        res.send(getAdmins)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
});

module.exports = projectRouter;
