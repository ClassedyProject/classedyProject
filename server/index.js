import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';  
import routerRoutes from './Routes/router.js'


const app = express();
app.use('/signUp', routerRoutes)
app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))
app.use(cors());

const CON_URL = "mongodb+srv://Classedy:classedy.pro123@cluster0.qe8lx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;
mongoose.connect(CON_URL,{useNewUrlParser : true, useUnifiedTopology : true})
.then( () => app.listen(PORT, ()=>console.log("Running on PORT" , PORT)))
.catch((error)=> console.log())
