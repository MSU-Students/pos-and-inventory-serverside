export interface ManageProduct {
  product_ID?: number;
  productName: string;
  productSize: string;
  productPrice: number;
  productCategory: string;
  productSubCategory: string;
  productAvailability: 'Yes' | 'No';
  productDateCreated: string;
}
