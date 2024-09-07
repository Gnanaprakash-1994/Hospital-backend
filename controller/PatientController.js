const express = require('express')
const PatientModel = require('../models/PatientModel')
const mongoose  = require('mongoose')

// API to add New Patient details in DB - POST Method
const createPatient = async(req,res) => {
    const {pname,mobile,gender,age,address} = req.body
    try {
        const newPatient = await PatientModel.create({pname,mobile,gender,age,address})
        res.status(200).json(newPatient)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

// API to get all Patient details in DB to Frontend - GET Method
const getPatient = async(req,res) => {
    try{
        const getAll = await PatientModel.find({})
        res.status(200).json(getAll)
    } catch(e) {
        res.status(400).json({error: e.message})
    }
}

//API to get particular Patient Details - GET Method
const singlePatient = async(req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "Not a valid ID"})
    }
    try {
       const singlePatient = await PatientModel.findById(id) 
       res.status(200).json(singlePatient)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

//API to update particular patient details - PATCH Method
const updatePatient = async(req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "Not a valid ID"})
    }
    try {
        const upPatient = await PatientModel.findByIdAndUpdate(
            {_id:id},
            {...req.body}
        )
        res.status(200).json(upPatient)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
} 

//API to delete Patient details DB - DELETE Method
const deletePatient = async(req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "Use Valid ID"})
    }
    try {
        const delPatient = await PatientModel.findByIdAndDelete(id)
        res.status(200).json({message: "Patient Entry has been removed"})
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

module.exports = {createPatient , getPatient , singlePatient , updatePatient , deletePatient}