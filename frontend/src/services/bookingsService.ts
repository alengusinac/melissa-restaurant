import { IBooking } from '../models/IBooking';
import { get } from './serviceBase';

const BASE_URL = 'http://localhost:3000';

export const getAllBookings = async (): Promise<IBooking[]> => {
  const response = await get<IBooking[]>(`${BASE_URL}/bookings/all`);
  return response;
};
