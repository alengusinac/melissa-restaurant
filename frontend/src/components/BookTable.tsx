import { useState } from "react";
import { IBookingDetails } from "../models/IBookingDetails"
import Button from "./Button";
import bookTableStyles from "../styles/BookTable.module.scss"
import { postBooking } from "../services/bookingsService";
import { useNavigate } from "react-router-dom";

interface IBookTableProps {
  bookingDetails: IBookingDetails;
}

export const BookTable = ({bookingDetails}: IBookTableProps) => {
  const [nameInput, setNameInput] = useState("");
  const navigate = useNavigate();

  const bookTable = async () => {
    const newBooking = {
      name: nameInput,
      date: bookingDetails.date,
      amount: bookingDetails.amount,
      table: bookingDetails.table.table,
      sitting: bookingDetails.table.sitting,
    };
    
    const response = await postBooking(newBooking);
    navigate(`/booking/${response.shortId}`)
    
  }

  return <section className={bookTableStyles.finishBooking}>
  <h4>Finish your booking:</h4>
    <p>Date: {bookingDetails.date}</p>
    <p>Tablenumber: {bookingDetails.table.table}</p>
    <p>Guests: {bookingDetails.amount} pax</p>
    <p>Time: {bookingDetails.table.sitting === 1 ? "18:00" : "21:00"}</p>
    <label>Name:
      <br/>
      <input type="text" value={nameInput} onChange={e => setNameInput(e.target.value)} />
    </label>
    <br/>
    <Button offset={false} text="Book table" active={nameInput ? true : false} onClick={bookTable} />
  </section>
}