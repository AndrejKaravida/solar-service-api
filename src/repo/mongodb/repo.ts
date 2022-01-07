import { getDb } from "./mongo";

export const get = (filters: any) => {
  const mongoClient = getDb();
  return mongoClient.findOne(filters);
};

export const getAll = async (filters: any) => {
  const mongoClient = getDb();
  return await mongoClient.find(filters).toArray();
};
