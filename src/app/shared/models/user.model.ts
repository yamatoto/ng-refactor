import { Auth } from './../enum/auth.enum';

export interface User {
    id: number;
    email: string;
    auth: Auth;
}
