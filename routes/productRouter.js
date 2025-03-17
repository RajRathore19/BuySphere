import express from 'express';

const productRouter = express.Router();

productRouter.get('/',(req,res)=>{
    res.send('radha radha');
})
export default productRouter;