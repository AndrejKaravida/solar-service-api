import { getDb } from "../repo/mongodb/mongo";
import { get, getAll } from "../repo/mongodb/repo";

export const getCurrentMeasurement = async (city: string) => {
  const currentTime = new Date();
  currentTime.setMinutes(0, 0, 0);

  return get({
    city,
    date: currentTime,
  });
};

export const findAllMeasurements = async (city: string) => {
  return await getAll({ city: city });
};
