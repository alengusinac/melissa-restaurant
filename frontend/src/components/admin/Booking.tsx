import { IBooking } from "../../models/IBooking";
import bookingStyles from "../../styles/admin/booking.module.scss";

const Booking = ({ booking }: { booking: IBooking }) => {
  return (
    <li className={bookingStyles.booking_container}>
      <span className={bookingStyles.booking}>
        <p>Boknings id:</p>
        <p>{booking.shortId}</p>
      </span>
      <span className={bookingStyles.booking}>
        <p>Name:</p>
        <p>{booking.name}</p>
      </span>
      <span className={bookingStyles.booking}>
        <p>Guests:</p>
        <p>{booking.amount}</p>
      </span>
      <span className={bookingStyles.booking}>
        <p>Table:</p>
        <p>{booking.table}</p>
      </span>
      <span className={bookingStyles.booking}>
        <p>Date:</p>
        <p>{booking.date}</p>
      </span>
      <span className={bookingStyles.booking}>
        <p>Sitting:</p>
        <p>{booking.sitting === 1 ? "18:00" : "21:00"}</p>
      </span>
    </li>
  );
};

export default Booking;
