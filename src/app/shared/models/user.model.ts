import { Auth } from '@shared/enums/auth.enum';

export interface User {
  id: number;
  email: string;
  auth: Auth;
}
