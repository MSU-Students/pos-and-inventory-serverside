export interface Users {
  usertID?: string;
  FName: string;
  MName: string;
  LName: string;
  username: string;
  password: string;
  email: string;
  role: 'Admin' | 'Cashier';
  dateCreated: string;
  status: 'Active' | 'Inactive' | 'Banned';
}
