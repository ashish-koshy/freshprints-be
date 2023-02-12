
import { ApparelSize } from '../enums';

export type Stock = {
  id: string;
  apparel_id: string;
  apparel_name: string;
  producer: string;
  size: ApparelSize;
  units: number;
  unit_price: number;
}

export type StockUpdate = {
  apparel_id: string;
  size: ApparelSize;
  units: number;
  unit_price: number;
}

export type StockCheck = {
  apparel_name: string;
  size: ApparelSize;
}[]

export type StockAvailability = {
  apparel_name: string;
  producer: string;
  size: ApparelSize;
  available_units: number;
  unit_price: number;
}