import { Auth } from '../enums/auth.enum';

export interface Session {
    userId: number;
    accountName: string;
    companyCode: string;
    authes: Auth[];
}
