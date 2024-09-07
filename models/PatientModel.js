const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PatientSchema = new Schema(
    {
        pname:{
            type: String,
            require: true
        },
        mobile:{
            type: String,
            require: true
        },
        gender:{
            type: String,
            require: true
        },
        age:{
            type: String,
            require: true
        },
        address:{
            type: String,
            require: true
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model('Patient-table',PatientSchema)