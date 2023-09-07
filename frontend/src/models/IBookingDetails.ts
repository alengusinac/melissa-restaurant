import { ITable } from './ITable';

export interface IBookingDetails {
  date: string;
  amount: number;
  tableChosen: boolean;
  table: ITable;
}
