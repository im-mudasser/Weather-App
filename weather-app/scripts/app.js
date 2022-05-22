const cityForm = document.querySelector(".change-location");

const card = document.querySelector(".card");
const details = document.querySelector(".details");
const icon = document.querySelector(".icon img");
const time = document.querySelector("img.time");

// updateUi

const updateUi = (data) => {
  const cityDetails = data.cityDetails;
  const weather = data.weather;

  details.innerHTML = ` 
  <div>
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>

    </div>

    `;

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }

  // for time day and night


  if (weather.IsDayTime) {
    time.setAttribute("src", "img/day.jpg");
  } else {
    time.setAttribute("src", "img/night.jpg");
  }

  // for icon
  const iconSrc = `icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);
};

// update city

const updateCity = async (city) => {
  const cityDetails = await getCity(city);

  const weather = await getCurrentCondition(cityDetails.Key);

  return {
    cityDetails: cityDetails,
    weather: weather,
  };
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityForm.city.value.trim();

  cityForm.reset();

  updateCity(city).then((data) => {
    updateUi(data);
  });
}); //end of form
