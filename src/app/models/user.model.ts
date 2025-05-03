import { Department } from "./department.model";
import { Loan } from "./loan.model";
import { Role } from "./role.model";

export interface User {
    id?: number;
    name: string;
    email: string;
    password?: string;
    id_rol: number;
    id_department: number;
  
    role?: Role;
    department?: Department;
    loans?: Loan[];
}
