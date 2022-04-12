export interface Users {
  id?: number;
  FName: string;
  MName?: string;
  LName: string;
  username?: string;
  password?: string;
  type?: 'admin' | 'cashier';
  contact?: string;
  email?: string;
  status: 'Active' | 'Inactive';
  userDateCreated: string;
}
