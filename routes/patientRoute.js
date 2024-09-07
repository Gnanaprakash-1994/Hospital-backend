const express = require('express')

const router = express.Router()

const {createPatient, getPatient, singlePatient, updatePatient, deletePatient} = require('../controller/PatientController')

router.post('/newpatient',createPatient)

router.get('/',getPatient)

router.get('/:id',singlePatient)

router.patch('/update/:id',updatePatient)

router.delete('/:id',deletePatient)

module.exports = router