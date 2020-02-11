import { Auth } from '../enums/auth.enum';

export interface User {
  id: number;
  email: string;
  auth: Auth;
}
