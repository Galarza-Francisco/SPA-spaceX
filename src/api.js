export const getLaunches = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v5/launches');
    const launches = await response.json();
    return launches;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
