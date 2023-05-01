const express = require("express");
const cors = require("cors");
const multer = require("multer");
const projectRouter = new express.Router();
const path = require('path');
const Panel = require("../models/projects");

// Define a storage location for uploaded files

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, './uploads'));
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
// Create a multer instance to handle file uploads
const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      cb(null, true);
    },
  });
 
  

projectRouter.use(cors());

// Modify the POST route to handle image uploads with mime and buffer
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
      if (req.files && req.files.bannerImage1) {
        addProject.bannerImage1 = {
          data: req.files.bannerImage1[0].path,
          type: req.files.bannerImage1[0].mimetype,
        };
      }
      if (req.files && req.files.bannerImage2) {
        addProject.bannerImage2 = {
          data: req.files.bannerImage2[0].path,
          type: req.files.bannerImage2[0].mimetype,
        };
      }
      if (req.files && req.files.bannerImage3) {
        addProject.bannerImage3 = {
          data: req.files.bannerImage3[0].path,
          type: req.files.bannerImage3[0].mimetype,
        };
      }
      await addProject.save();
      res.status(201).send(addProject);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
);


projectRouter.get("/projects", async (req, res) => {
  try {
    const getProjects = await Panel.find({});
    res.send(getProjects);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

projectRouter.get("/projects/:id", async (req, res) => {
  try {
    const getProjects = await Panel.findById(req.params.id);
    if (!getProjects) {
      res.status(404).send();
    }
    res.send(getProjects);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});


  projectRouter.patch("/projects/:id", upload.fields([{ name: "bannerImage1", maxCount: 1 }, { name: "bannerImage2", maxCount: 1 }, { name: "bannerImage3", maxCount: 1 }]), async (req, res) => {
    try {
      const getProjects = await Panel.findById(req.params.id);
      if (!getProjects) {
        res.status(404).send();
      }
      Object.keys(req.body).forEach((key) => {
        getProjects[key] = req.body[key];
      });
      if (req.files && req.files.bannerImage1) {
        getProjects.bannerImage1 = req.files.bannerImage1[0].path;
      }
      if (req.files && req.files.bannerImage2) {
        getProjects.bannerImage2 = req.files.bannerImage2[0].path;
      }
      if (req.files && req.files.bannerImage3) {
        getProjects.bannerImage3 = req.files.bannerImage3[0].path;
      }
      await getProjects.save();
      res.send(getProjects);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  });

projectRouter.delete("/projects/:id", async (req, res) => {
  try {
    const getProjects = await Panel.findByIdAndDelete(req.params.id);
    res.send(getProjects);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = projectRouter;
