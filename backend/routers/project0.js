const express = require("express");
const cors = require("cors");
const multer = require('multer');
const projectRouter = new express.Router();
const Panel = require("../models/projects");

// Define a storage location for uploaded files
const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

// Create a multer instance to handle file uploads
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new Error('Only image files are allowed!'));
    }
    cb(null, true);
  }
});

projectRouter.use(cors());


// Modify the POST route to handle image uploads
projectRouter.post(
  "/projects",
  upload.fields([
    { name: "bannerImage1", maxCount: 1 },
    { name: "bannerImage2", maxCount: 1 },
    { name: "bannerImage3", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const addProject = new Panel(req.body);

      // If an image was uploaded, store the binary data in the database
      if (req.files) {
        if (req.files.bannerImage1) {
          addProject.bannerImage1.data = req.files.bannerImage1[0].buffer;
          addProject.bannerImage1.type = req.files.bannerImage1[0].mimetype;
          addProject.bannerImage1Url = `${req.protocol}://${req.headers.host}/uploads/${req.files.bannerImage1[0].filename}`;
        }

        if (req.files.bannerImage2) {
          addProject.bannerImage2.data = req.files.bannerImage2[0].buffer;
          addProject.bannerImage2.type = req.files.bannerImage2[0].mimetype;
          addProject.bannerImage2Url = `${req.protocol}://${req.headers.host}/uploads/${req.files.bannerImage2[0].filename}`;
        }

        if (req.files.bannerImage3) {
          addProject.bannerImage3.data = req.files.bannerImage3[0].buffer;
          addProject.bannerImage3.type = req.files.bannerImage3[0].mimetype;
          addProject.bannerImage3Url = `${req.protocol}://${req.headers.host}/uploads/${req.files.bannerImage3[0].filename}`;
        }
      }

      const insertProject = await addProject.save();

      // Send the URLs along with the project data
      const projectData = {
        _id: insertProject._id,
        name: insertProject.name,
        title: insertProject.title,
        description: insertProject.description,
        bannerImage1: insertProject.bannerImage1,
        bannerImage2: insertProject.bannerImage2,
        bannerImage3: insertProject.bannerImage3,
        linkedIn: insertProject.linkedIn,
        google: insertProject.google,
        twitter: insertProject.twitter,
        facebook: insertProject.facebook,
        youtube: insertProject.youtube,
        minimumAmount: insertProject.minimumAmount,
        maximumAmount: insertProject.maximumAmount,
      };

      res.status(201).send(projectData);
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

projectRouter.patch("/projects/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getAdmins = await Panel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getAdmins);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

projectRouter.delete("/projects/:id", async (req, res) => {
  try {
    const getAdmins = await Panel.findByIdAndDelete(req.params.id);
    res.send(getAdmins);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = projectRouter;
