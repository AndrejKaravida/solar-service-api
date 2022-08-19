const threshold = 500;

export const calculateLoad = (
  cloudCoverage: number,
  temperature: number,
  considerP = 100
) => {
  if (cloudCoverage > 33) {
    return threshold;
  }
  const solarInsulation = 990 * (1 - 3 * (cloudCoverage / 100));
  const tCell = temperature + 0.025 * solarInsulation;
  return considerP * solarInsulation * 0.00095 * (1 - 0.005 * (tCell - 25));
};
