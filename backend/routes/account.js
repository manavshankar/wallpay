const express = require('express');
const router = express.Router();
const z = require('zod');
const {Account} = require('../db/db');
const jwt = require('jsonwebtoken');
const { authmiddleware } = require("../middleware");
const { mongoose } = require('mongoose');

router.get('/balance',authmiddleware,async (req,res)=>{
    const account = await Account.findOne({
        userId : req.userId
    })
    res.json({balance : account.balance});
})

router.post('/transfer', authmiddleware, async(req,res)=>{
    const session = await mongoose.startSession();

    session.startTransaction();
    const {amount,to} = req.body;
    const account = await Account.findOne({
        userId : req.userId
    })
    if(!account || amount>account.balance){
        await session.abortTransaction();
        return res.status(400).json({
            msg:"Insufficent balance"
        })
    }

    const toAccount = Account.findOne({
        userId : to
    }).session(session);

    if(!toAccount){
        session.abortTransaction();
        return res.status(400).json({
            msg:"Account doesn't exist"
        })
    }
    await Account.updateOne({userId : req.userId},{$inc : {balance : -amount}}).session(session);
    await Account.updateOne({userId : to},{$inc : {balance : amount}}).session(session);

    await session.commitTransaction();
    res.json({
        msg:"Transfer successful"
    })
})

module.exports = router;