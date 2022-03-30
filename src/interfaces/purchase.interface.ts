export interface Purchase {
  purchaseID?: number;
  purchaseProduct: string;
  productQuantity?: number;
  productUnit: string;
  purchaseAmount: number;
  purchaseStatus: string;
  purchaseDate: string;
  purchaseCategory: string;
}
