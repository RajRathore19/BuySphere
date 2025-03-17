import express from 'express';
import path from 'path';
import  {fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import db from './config/mongoose-connection.js';
import ownerRouter from './routes/ownersRouter.js';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));
app.set("views","views");
app.set('views engine','ejs');
app.use(cookieParser());


app.use('/owner',ownerRouter);
app.use('/user',userRouter);
app.use('/product',productRouter);


app.listen(3000,()=>{
    console.log("connection establish successfully");
})