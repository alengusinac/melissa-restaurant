import { IBooking } from "./IBooking";

export interface ISortedBookings {
  [date: string]: IBooking[];
}
