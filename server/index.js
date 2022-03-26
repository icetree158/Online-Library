require('dotenv').config()
const express = require('express') // без рестарта 
const PORT = process.env.PORT || 5000
const sequelize = require('./db')
const models= require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const ErrorHandler=require('./middleware/ErrorHandlingMiddleware')
const fileUpload = require('express-fileupload')
const path = require('path')


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api',router)
app.use(ErrorHandler)


app.get('/',(req,res)=>{
    res.status(200).json({message:"dfsdf34"})
})

const start = async()=>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT,()=>console.log('server start  $$$$$$$${5000}'))
    }catch(e){
        console.log(e)
    }
}
start()
