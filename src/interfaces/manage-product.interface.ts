export interface ManageProduct {
  product_ID?: string;
  productName: string;
  productSize: string;
  productPrice: number;
  productCategory: string;
  productSubCategory: string;
  productAvailability: 'Yes' | 'No';
  productDateCreated: string;
}
