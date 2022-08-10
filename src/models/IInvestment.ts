import { IEnvironmentalImpact } from "./IEnvironmentalImpact";
import { IProductionHistory } from "./IProductionHistory";
import { ObjectId } from "mongodb";

export interface IInvestment {
  id?: ObjectId;
  userId: string;
  address: string;
  price: number;
  date: Date;
  moneySaved: number;
  kwhGenerated: number;
  currentProduction: number;
  productionHistory: IProductionHistory[];
  roofSize: number;
  monthlyBillPrice: number;
  environmentalImpact: IEnvironmentalImpact;
}
