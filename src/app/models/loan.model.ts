import { LoanDetails } from "./loan-details.model";
import { Returns } from "./returns.model";
import { Signer } from "./signer.model";
import { User } from "./user.model";

export interface Loan {
    id?: number;
    user_id: number;
    loan_date: string;
    loan_detail_id: number;
    signer_id: number;
    returned: boolean;
    extension_date?: string | null;
  
    user?: User;
    signer?: Signer;
    detail?: LoanDetails;
    return?: Returns;
}
