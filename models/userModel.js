import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({

    firstName: {
        type: String,
        required: true,
        trim: true
    },

    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

}, {
    timestamps: true,
})

module.exports = mongoose.model("User", UserSchema)