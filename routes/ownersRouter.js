import express from 'express';

const ownerRouter = express.Router();

ownerRouter.get('/',(req,res)=>{
    res.send('hari bol owner');
})
export default ownerRouter;