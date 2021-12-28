export const calculateLoad = (
  cloudCoverage: number,
  temperature: number,
  considerP = 100
) => {
  let solarInsolation = 990 * (1 - 3 * (cloudCoverage / 100));
  if (solarInsolation < 0) {
    solarInsolation = 0;
  }
  const tCell = temperature + 0.025 * solarInsolation;
  return considerP * solarInsolation * 0.00095 * (1 - 0.005 * (tCell - 25));
};
