// const express = require("express");
// const cors = require("cors")
// const adminRouter = new express.Router();
// const Panel = require("../models/admins");

// adminRouter.post("/admins", async (req,res)=>{
//     try {
//         const addAdmins = new Panel(req.body);
//         console.log(req.body);
//         const insertAdmins = await addAdmins.save();
//         res.status(201).send(insertAdmins);
//     } catch (error) {
//         console.log(error);
//         res.status(400).send(error);
        
//     }
// });

// adminRouter.get("/admins", async (req, res)=>{
//     try {
//         const getAdmins = await Panel.find({});
//         res.send(getAdmins);
//     } catch (error) {
//         console.log(error);
//         res.status(400).send(error);
        
//     }
// })
// adminRouter.get("/admins/:id", async(req, res)=>{
//     try {
//         const _id=req.params.id;
//         const getAdmins =await Panel.findById(_id);
//         res.send(getAdmins)
//     } catch (error) {
//         res.status(400).send(error);
        
//     }
// })

// adminRouter.patch("/admins/:id", async (req, res)=>{
//     try {
//         const_id = req.params.id;
//         const getAdmins= await Panel.findByIdAndUpdate(_id, req.body,{
//             new :true,
//         });
//         res.send(getAdmins);
//     } catch (error) {
//         console.log(error)
//         res.status(500).send(error);
        
//     }
// })

// adminRouter.delete("/admins/:id", async(req, res)=>{
//     try {
//         const getAdmins=await Panel.findByIdAndDelete(req.params.id);
//         res.send(getAdmins)
//     } catch (error) {
//         console.log(error);
//         res.status(500).send(error)
        
//     }
// });

// module.exports=adminRouter;
const express = require("express");
const cors = require("cors")
const projectRouter = new express.Router();
const Panel = require("../models/projects");

projectRouter.post("/projects", async (req,res)=>{
    try {
        const addAdmins = new Panel(req.body);
        console.log(req.body);
        const insertAdmins = await addAdmins.save();
        res.status(201).send(insertAdmins);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
        
    }
});

projectRouter.get("/projects", async (req, res)=>{
    try {
        const getAdmins = await Panel.find({});
        res.send(getAdmins);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
        
    }
})
projectRouter.get("/projects/:id", async(req, res)=>{
    try {
        const _id=req.params.id;
        const getAdmins =await Panel.findById(_id);
        res.send(getAdmins)
    } catch (error) {
        res.status(400).send(error);
        
    }
})

projectRouter.patch("/projects/:id", async (req, res)=>{
    try {
        const _id = req.params.id;
        const getAdmins= await Panel.findByIdAndUpdate(_id, req.body,{
            new :true,
        });
        res.send(getAdmins);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});


// projectRouter.patch("/projects/:id", async (req, res)=>{
//     try {
//         const_id = req.params.id;
//         const getAdmins= await Panel.findByIdAndUpdate(_id, req.body,{
//             new :true,
//         });
//         res.send(getAdmins);
//     } catch (error) {
//         console.log(error)
//         res.status(500).send(error);
        
//     }
// })

projectRouter.delete("/projects/:id", async(req, res)=>{
    try {
        const getAdmins=await Panel.findByIdAndDelete(req.params.id);
        res.send(getAdmins)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
        
    }
});

module.exports=projectRouter;