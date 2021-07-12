const mongoose = require("mongoose")
const mongoURL= require('./config/env').mongoURL

//create mongoose connection
mongoose.connect(mongoURL, { useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex:true})

//listening for mongoose connection
mongoose.connection.on("open",()=>console.log("db connected"))

//listening for any error 
mongoose.connection.on("error",(err)=>console.log(err.message))

//listener for disconnection
mongoose.connection.on("disconnected",()=>console.log("db connection disconnected"))

//ctrl C
process.on("SIGINT",()=>{
    mongoose.connection.close()
    process.exit()
})




