import { ObjectId } from "mongodb";
import { ISolarPanel } from "./ISolarPanel";
import { IEnvironmentalImpact } from "./IEnvironmentalImpact";
import { ICity } from "./ICity";
import { IUser } from "./IUser";

export interface IInvestment {
  id?: ObjectId;
  user: IUser;
  city: ICity;
  date: Date;
  numberOfPanels: number;
  power: number;
  moneySaved: number;
  cost: number;
  solarPanel: ISolarPanel;
  environmentalImpact: IEnvironmentalImpact;
  monthlyBillPrice: number;
}
