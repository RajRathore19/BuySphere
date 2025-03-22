import express from 'express';
import ownerSchema from '../model/ownerSchema.js'
const ownerRouter = express.Router();

ownerRouter.get('/',(req,res)=>{
    res.send('hari bol owner');
})

ownerRouter.post("/create",async(req,res)=>{
     const result = await ownerSchema.find()
     if(result.length > 0){
        res.send(503);
     }

     const {fullname,email,password} = req.body;
 
     let owner = await ownerSchema.create({
        fullname,
        email,
        password
     })
    res.status(201).send(owner);
})
export default ownerRouter;