const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AppointmentSchema = new Schema (
    {
        pname:{
            type: String,
            require: true
        },
        dname:{
            type: String,
            require: true
        },
        speciality:{
            type: String,
            require: true
        },
        date:{
            type: String,
            require: true
        }
    },
    {timestamps:true}
)

module.exports = mongoose.model('Appointment-table',AppointmentSchema);