import { ObjectId } from "mongodb";
import { ISolarPanel } from "./ISolarPanel";
import { IEnvironmentalImpact } from "./IEnvironmentalImpact";

export interface IInvestment {
  id?: ObjectId;
  userId: string;
  city: string;
  date: Date;
  roofSize: number;
  solarPanel: ISolarPanel;
  environmentalImpact: IEnvironmentalImpact;
  monthlyBillPrice: number;
}
