import { ConsumableType } from "./consumable-type.model";
import { Voucher } from "./voucher.model";

export interface DetailVoucher {
    id?: number;
    id_voucher: number;
    id_consumable: number;
    quantity: number;
  
    voucher?: Voucher;
    consumableType?: ConsumableType;
}
