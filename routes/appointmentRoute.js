const express = require('express')

const router = express.Router()

const {createAppointment, getAppointment, singleAppointment, updateAppointment, deleteAppointment} = require('../controller/AppointmentController')

router.post('/newappointment',createAppointment)

router.get('/',getAppointment)

router.get('/:id',singleAppointment)

router.patch('/update/:id',updateAppointment)

router.delete('/:id',deleteAppointment)

module.exports = router