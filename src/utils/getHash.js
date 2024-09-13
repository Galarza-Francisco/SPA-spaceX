// utils/getHash.js
const getHash = () => {
  return location.hash.slice(1).toLowerCase() || '/';
};

export default getHash;
