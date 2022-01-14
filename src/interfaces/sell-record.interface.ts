export interface SellRecord {
  invoiceID: number;
  invoiceDate: string;
  userID: number;
  customerName: string;
  productID: number;
  transanctionDiscount: number;
  tax: number;
  totalAmount: number;
}
