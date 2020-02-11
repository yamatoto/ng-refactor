import { environment } from '../../../environments/environment';

export class SessionConsts {
  public static readonly BASE_URL = `${environment.apiBaseUrl}/sessions`;
  public static readonly ME_URL = `${SessionConsts.BASE_URL}/me`;
  public static readonly ME_DELETE_URL = `${SessionConsts.BASE_URL}/me:delete`;
  public static readonly TOKEN_NAME = 'XSRF-TOKEN';
  public static readonly GENERATION_TIME_NAME = 'SGT';
}
