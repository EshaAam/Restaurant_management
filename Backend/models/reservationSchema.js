import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: [30, "First name should be less than 30 characters"],

    },
    lastName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: [30, "Last name should be less than 30 characters"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please enter a valid email"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [11, "Phone number should be 11 characters"],
        maxLength: [11, "Phone number should be 11 characters!"],
    },

    time: {
        type: String,
        required: true,
    },  

    date: {
        type: Date,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);