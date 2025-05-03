import { Loan } from "./loan.model";

export interface Returns {
    id?: number;
    loan_id: number;
    return_date: string;
    notes?: string;
  
    loan?: Loan;
}
