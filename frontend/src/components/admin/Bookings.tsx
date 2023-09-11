import { Fragment } from "react";
import { ISortedBookings } from "../../models/ISortedBookings";
import Booking from "./Booking";
import bookingsStyles from "../../styles/admin/Bookings.module.scss";

const Bookings = ({ bookings }: { bookings: ISortedBookings }) => {
  return (
    <ul className={bookingsStyles.bookings}>
      {Object.keys(bookings).map((key) => (
        <Fragment key={key}>
          <h4>{bookings[key][0].date}</h4>
          {bookings[key].map((booking) => {
            return <Booking key={booking.shortId} booking={booking} />;
          })}
        </Fragment>
      ))}
    </ul>
  );
};

export default Bookings;
