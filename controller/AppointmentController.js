const express = require('express')
const AppointmentModel = require('../models/AppointmentModel')

const mongoose = require('mongoose')

// API to create the Appointment data in DB - POST Method:
const createAppointment = async(req,res) => {
    const {pname,dname,speciality,date} = req.body
    try{
        const newappoint = await AppointmentModel.create({pname,dname,speciality,date})
        res.status(200).json(newappoint)
    }catch(e){
        res.status(400).json({error: e.message})
    }
}

//API to display all the Appointment details in Frontend - GET Method
const getAppointment = async(req,res) => {
  try{
    const getApp = await AppointmentModel.find({})
    res.status(200).json(getApp)
  } catch(e) {
    res.status(400).json({error: e.message})
  }
}

//API to display single appointment details in Frontend - GET Method
const singleAppointment = async(req,res) => {
    const {id} = req.params 
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "Its not a valid ID"})
    }
    try {
        const getSingleApp = await AppointmentModel.findById(id)
        res.status(200).json(getSingleApp)
        
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

//API to update appointment details - PATCH Method
const updateAppointment = async(req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "Select Valid Details"})
    }
    try {
        const updateApp = await AppointmentModel.findByIdAndUpdate(
            {_id:id,},
            {...req.body,}
        )
        res.status(200).json(updateApp)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

//API to Delete the Appointment details in Frontend - DELETE Method
const deleteAppointment = async(req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "Check for Valid Data"})
    }
    try {
        const deleteApp = await AppointmentModel.findByIdAndDelete(id)
        res.status(200).json({message: "Appointment has been cancelled"})
    } catch (e) {
        res.status(400).json({error : e.message})
    }
}
module.exports = { createAppointment , getAppointment , singleAppointment , updateAppointment , deleteAppointment }