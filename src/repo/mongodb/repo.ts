import { Filter } from "mongodb";
import { IMeasurement } from "../../models/Measurement";
import { getDb } from "./mongo";

export const get = async (filter: Filter<IMeasurement>) => {
  const mongoClient = getDb();
  return await mongoClient.findOne(filter);
};

export const getAll = async (filter: Filter<IMeasurement>) => {
  const mongoClient = getDb();
  return await mongoClient.find(filter).toArray();
};
