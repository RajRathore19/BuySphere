import express from 'express';

const userRouter = express.Router();

userRouter.get('/',(req,res)=>{
    res.send('hare krishna user');
})
export default userRouter;