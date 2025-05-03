import { Loan } from "./loan.model";

export interface LoanHistory {
    id?: number;
    loan_id: number;
    movement_date: string;
    movement_type: string;
  
    loan?: Loan;
}
