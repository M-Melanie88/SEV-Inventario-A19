import { Department } from "./department.model";

export interface Signer {
    id?: number;
  name: string;
  first_surname: string;
  second_surname: string;
  id_department: number;

  department?: Department;
}
