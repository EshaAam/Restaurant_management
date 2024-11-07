import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => { // get request from the frontend by req and send response to the frontend by res
    const { firstName, lastName, email, phone, time, date } = req.body;
    if (!firstName || !lastName || !email || !phone || !time || !date) {
        return next(new ErrorHandler(400,"Please fill all the fields"));
    }
    try {
        await Reservation.create({firstName, lastName, email, phone, time, date});
        res.status(200).json({
            success: true,
            message: "Reservation sent successfully"
        });
    } catch (error) {
        if (error.name == "validationError") {
            const validationErrors = Object.values(error.errors).map((err) => err.message);
            return next(new ErrorHandler(validationErrors.join(","), 400));
        }
        return next(error);
    }
};