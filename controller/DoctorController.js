const express = require('express')
const DoctorModel = require('../models/DoctorModel')
const  mongoose  = require('mongoose')

//API to add new Doctor - POST Method
const addDoctor =async(req,res) => {
    const {dname,mobile,speciality,designation} = req.body 
    try{
    const newDoctor = await DoctorModel.create({dname,mobile,speciality,designation})
    res.status(200).json(newDoctor)
    } catch(e) {
        res.status(400).json({error: e.message})
    }
}

//API to get Doctor Data - GET METHOD
const getDoctor = async(req,res) => {
    try {
        const doctor = await DoctorModel.find({})
        res.status(200).json(doctor)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

//API to get Single Doctor Data for Update - GET Method:
const singleDoctor = async(req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:"Select Valid ID"})
    }
    try{
        const singDoctor = await DoctorModel.findById(id)
        res.status(200).json(singDoctor)
    } catch(e){
        res.status(400).json({error: e.message})
    }
}

//API to update Doctor Data - PATCH Method
const updateDoctor = async(req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:"Not a valid ID"})
    }

    try { 
        const upDoctor = await DoctorModel.findByIdAndUpdate(
            {_id:id},
            {...req.body}
        )
        res.status(200).json(upDoctor)
        
    } catch (e) {
        res.status(400).json({error:e.message})
    }
}

//API to Delete the Doctor data - DELETE Method
const deleteDoctor = async(req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:"Not a valid ID"})
    }

    try { 
        const delDoctor = await DoctorModel.findByIdAndDelete(id)
        res.status(200).json({message: "Doctor Entry has been deleted"})
        
    } catch (e) {
        res.status(400).json({error:e.message})
    }
}

module.exports = {addDoctor, getDoctor , singleDoctor , updateDoctor , deleteDoctor }