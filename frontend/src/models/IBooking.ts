export interface IBooking {
  shortId: string;
  name: string;
  date: string;
  amount: number;
  table: number;
  sitting: number;
  isDeleted: boolean;
}
