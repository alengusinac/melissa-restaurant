import { IBooking } from '../models/IBooking';
import { ICancelBooking } from '../models/ICancelBooking';
import { IPostBooking } from '../models/IPostBooking';
import { ITable } from '../models/ITable';
import { get, post } from './serviceBase';

const BASE_URL = 'http://localhost:3000';

export const getAllBookings = async (): Promise<IBooking[]> => {
  const response = await get<IBooking[]>(`${BASE_URL}/bookings/all`);
  return response;
};

export const searchTablesByDate = async (date: string): Promise<ITable[]> => {
  const response = await post<ITable[]>(`${BASE_URL}/bookings/search`, {
    date: date,
  });
  return response;
};

export const postBooking = async (booking: IPostBooking): Promise<IBooking> => {
  const response = await post<IBooking>(`${BASE_URL}/bookings/create`, booking);
  return response;
};

export const cancelBooking = async (
  booking: ICancelBooking
): Promise<IBooking> => {
  const response = await post<IBooking>(`${BASE_URL}/bookings/cancel`, booking);
  return response;
};
