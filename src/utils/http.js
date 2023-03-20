const GET = async (path) => {
  const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1" + path);
  const data = await res.json();

  return data;
};

export default GET;
