const express = require('express')

const router = express.Router()

const {addDoctor,getDoctor, updateDoctor, deleteDoctor, singleDoctor} = require('../controller/DoctorController')

router.post('/new',addDoctor)

router.get('/',getDoctor)

router.get('/:id',singleDoctor)

router.patch('/update/:id',updateDoctor)

router.delete('/:id',deleteDoctor)

module.exports = router