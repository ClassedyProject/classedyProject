import express from 'express'
import SignUpData from '../Models/signUp.js'
export const getAccount = async(req, res)=>{
    try {
        const account = await SignUpData.find()
        res.status(200).json(account)

    } catch (error) {
        res.status(404).json({message:error.message})
        
    }

}
export const postAccount = async(req, res)=>{
    const accountData = req.body
    const newAccount = new SignUpData(accountData)
    
    
    try {
        await newAccount.save();
        console.log(newAccount)
        res.status(201).json(newAccount)
    } catch (error) {
        res.status(409).json({message:error.message})
        

    
    }
}
