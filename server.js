const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const doctorRoute = require('./routes/doctorRoute')
const appointmentRoute = require('./routes/appointmentRoute')
const patientRoute = require('./routes/patientRoute')

const app = express()
require('dotenv').config()

app.use(express.json())
app.use(cors())

// MongoDB Connection: 
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log('DB Connected Successfully and Server started at Port '+ process.env.PORT) 
        })  
    }).catch(err => console.log(err) )

// Base router creation for doctor
app.use('/doctor',doctorRoute)

// Base router creation for Appointment
app.use('/appointment',appointmentRoute) 

//Base router creation for Patient
app.use('/patient',patientRoute)
