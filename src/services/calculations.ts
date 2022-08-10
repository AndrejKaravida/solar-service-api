const threshold = 500;

export const calculateLoad = (
  cloudCoverage: number,
  temperature: number,
  considerP = 100
) => {
  if (cloudCoverage > 33) {
    return threshold;
  }
  let solarInsolation = 990 * (1 - 3 * (cloudCoverage / 100));
  const tCell = temperature + 0.025 * solarInsolation;
  return considerP * solarInsolation * 0.00095 * (1 - 0.005 * (tCell - 25));
};
