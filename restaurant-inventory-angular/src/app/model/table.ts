export interface Table {
  id: number;
  capacity: number;
  reservationBookingTime: string;
  reservationStartTime: string;
  reservationEndTime: string;
  serviceCharge: number;
  paidAmount: number;
  userId: number;
}
