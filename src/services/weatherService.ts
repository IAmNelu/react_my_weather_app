const BASE_URL_CURRENT = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}`;
const BASE_URL_FORECAST = `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}`;
const BASE_URL_SEARCH = `https://api.weatherapi.com/v1/search.json?key=${import.meta.env.VITE_WEATHER_API_KEY}`;

export const getCurrentAuto = () => {
	return fetch(`${BASE_URL_CURRENT}&q=auto:ip&aqi=yes`);
};

export const getCurrentCity = (cityName: string) => {
	console.log("to implement");
	return fetch(`${BASE_URL_CURRENT}&q=auto:ip&aqi=yes`);
};

export const getForecastAuto = () => {
	return fetch(`${BASE_URL_FORECAST}&q=auto:ip&days=3&aqi=no&alerts=no`);
};

export const getForecastLocation = (location: string) => {
	return fetch(`${BASE_URL_FORECAST}&q=id:${location}&days=3&aqi=no&alerts=no`);
};

export const getAutocomplete = (location: string) => {
	return fetch(`${BASE_URL_SEARCH}&q=${location}`);
};
