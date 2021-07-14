const mongoose = require("mongoose")
const {mongoURL}= require('./config/env')

//create mongoose connection
mongoose.connect(mongoURL, { useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex:true})

//listening for mongoose connection
mongoose.connection.on("open",()=>console.log("db connected"))

//listening for any error another ex ((err)=>console.log(err.message))
mongoose.connection.on("error",console.error)

//listener for disconnection
mongoose.connection.on("disconnected",()=>console.log("db connection disconnected"))

//ctrl C
process.on("SIGINT",()=>{
    mongoose.connection.close()
    process.exit()
})




