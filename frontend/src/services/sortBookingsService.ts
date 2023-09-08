import { IBooking } from "../models/IBooking";
import { ISortedBookings } from "../models/ISortedBookings";

export const sortBookings = (bookings: IBooking[]) => {
  const sortByDate = bookings.sort((a, b) => a.date.localeCompare(b.date));
  const sorted: ISortedBookings = {};
  sortByDate.forEach((booking) => {
    const key = booking.date;
    if (!sorted[key]) {
      sorted[key] = [];
    }
    sorted[key].push(booking);
  });
  return sorted;
};
