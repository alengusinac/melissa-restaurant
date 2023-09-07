import { useState, useEffect } from "react";
import GetBookings from "./GetBookings";
import Bookings from "./Bookings";
import { getAllBookings } from "../../services/bookingsService";
import { sortBookings } from "../../services/sortBookingsService";
import handleBookingsStyles from "../../styles/admin/HandleBookings.module.scss";
import { ISortedBookings } from "../../models/ISortedBookings";

const HandleBookings = () => {
  const [bookings, setBookings] = useState<ISortedBookings>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllBookings();
        if (response.length > 0) {
          const sortedBookings = sortBookings(response);
          setBookings(sortedBookings);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className={handleBookingsStyles.handleBookings}>
      <h1>Admin</h1>
      <GetBookings />
      <Bookings bookings={bookings} />
    </section>
  );
};

export default HandleBookings;
