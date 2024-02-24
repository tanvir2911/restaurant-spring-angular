export interface Order {
  id: number;
  orderItems: string[];
  netAmount: number;
  userId: any;
  time: number;
  address: string;
  orderStatus: string;
}
