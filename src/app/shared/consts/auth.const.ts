import { Auth } from '@shared/enums/auth.enum';

export class AuthConsts {
  /** 社内権限. */
  public static readonly INTERNAL_AUTHES = [Auth.Internal];

  /** マスタ編集権限. */
  public static readonly MASTA_EDITABLE_AUTHES = [Auth.System, Auth.Admin, Auth.Internal];

}
