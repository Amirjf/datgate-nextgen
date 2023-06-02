export const siteDataFetcher = async () => {
  const response = await fetch(
    'https://api2.dealertower.com/dealer/nissan.datgate.com/get-information'
  );
  const { data } = await response.json();
  return data;
};
