export const calculateLoad = (
  cloudCoverage: number,
  temperature: number,
  considerP = 5
) => {
  const solarInsolation = 990 * (1 - 3 * cloudCoverage);
  const tCell = temperature + 0.025 * solarInsolation;
  return considerP * solarInsolation * 0.00095 * (1 - 0.005 * (tCell - 25));
};
