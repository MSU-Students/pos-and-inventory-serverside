export interface SellRecord {
  invoiceID: number;
  invoiceDate: string;
  customerName: string;
  transanctionDiscount: number;
  tax: number;
  totalAmount: number;
}
