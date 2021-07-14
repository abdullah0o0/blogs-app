const express=require("express")
require("./mongooseConnection")
const {port} = require('./config/env')
//create express server
const app = express()




// 404 page not found middleware
app.use((req,res,next)=>{
   /*  let err = new Error("page not found") */
   /*  err.status=404; */
/*  let err = new createError.NotFound() */
    let err = createError(404,"page not found") 
    next(err)
})

//error handling middleware/ universal error handler
app.use((err,req,res,next)=>{
    res.status(err.status || 500).send({success:false, message:err.message})
})


// to listen to the server   app.listen(port,()=>{})
app.listen(port, ()=>console.log("express server is running on port: ",port))

