const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/RealDonation", {
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection is Successful")
}).catch((e)=>{
    console.log(e)

})