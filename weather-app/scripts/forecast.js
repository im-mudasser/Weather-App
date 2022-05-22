const key = "7JIIa3vfvL4qBqRdSjHqQwBxVIO133g0";

//get current condition  of weather

const getCurrentCondition = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";

  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

// getcity search
const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};


