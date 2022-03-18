import express from 'express'
import mongoose from 'mongoose'
const signUpSchema = mongoose.Schema({
    emailAddress : {
        type: String, 
        required:true
    },
    userName : {
        type: String, 
        required:true
    },
    password : {
        type: Number, 
        required:true
    },
})
const SignUpData = mongoose.model("SignUpData", signUpSchema)
export default SignUpData;