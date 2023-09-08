import { useParams } from "react-router-dom";
import { getBookingById } from "../services/bookingsService";
import { IBooking } from "../models/IBooking";
import { useEffect, useState } from "react";
import bookingConfirmationStyles from "../styles/BookingConfirmation.module.scss"

const BookingConfirmation = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState<IBooking>({
    name: "",
    date: "",
    shortId: "",
    amount: 0,
    table: 0,
    sitting: 0,
    isDeleted: false
  })

  useEffect(() => {
    const getBooking = async() => {
      if(typeof id === "string") {
        const booking = await getBookingById(id);
        setBooking(booking)
      }
    }
    if (booking.name === "") getBooking();
  })
  
  

  return <div className={bookingConfirmationStyles.bookingConfirmation}>
    <h2>Thanks!</h2>
    <p>We have recieved your booking and confirm it below.</p>
    <h4>Name: {booking.name}</h4>
    <p>Booking number: {booking.shortId}</p>
    <p>Table: {booking.table}</p>
    <p>Guests: {booking.amount} pax</p>
    <p>Date: {booking.date}</p>
    <p>Time: {booking.sitting === 1 ? "18:00" : "21:00"}</p>
    <p>We are looking forward recieving you at restaurant Melissa!</p>
  </div>;
};

export default BookingConfirmation;
