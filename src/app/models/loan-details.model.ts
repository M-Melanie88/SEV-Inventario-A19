import { EquipmentType } from "./equipment-type.model";
import { Loan } from "./loan.model";

export interface LoanDetails {
    id?: number;
    equipment_type_id: number;
    description: string;
    brand: string;
    model: string;
    quantity: number;
    serial_number: string;
    inventory_code: string;
    remarks?: string;
  
    loan?: Loan;
    equipmentType?: EquipmentType;
}
