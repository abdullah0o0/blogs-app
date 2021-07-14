const express=require("express")
require("./mongooseConnection")
const {port} = require('./config/env')
const core = require('./middleware/security')
const errorsHandler = require('./middleware/errors')
const usersRouter = require('./routes/users')

//create express server
const app = express()
app.use(core)

app.use(express.urlencoded({extended: true}))
app.use(express.json())


//routes
app.use("/api/v1/users",usersRouter)



//error handling middleware/ universal error handler
app.use(errorsHandler)


// to listen to the server   app.listen(port,()=>{})
app.listen(port, ()=>console.log("express server is running on port: ",port))

