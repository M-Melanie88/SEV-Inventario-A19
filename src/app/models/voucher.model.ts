import { Department } from "./department.model";
import { DetailVoucher } from "./detail-voucher.model";
import { Signer } from "./signer.model";
import { User } from "./user.model";

export interface Voucher {
    id?: number;
  issue_date: string;
  number_ofice: string;
  id_user: number;
  observations: string;
  id_department: number;
  sheet_dti: string;
  id_signatory: number;

  user?: User;
  department?: Department;
  signer?: Signer;
  details?: DetailVoucher[];
}
