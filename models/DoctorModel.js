const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DoctorSchema = new Schema(
    {
        dname:{
            type: String,
            require: true
        },
        mobile:{
            type: String,
            require: true
        },
        speciality:{
            type: String,
            require: true
        },
        designation:{
            type: String,
            require: true
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model('Doctor-Table',DoctorSchema)