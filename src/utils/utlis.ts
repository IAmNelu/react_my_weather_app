import type { ForecastDay } from "../components/Forecast.tsx";

type ForecastDayApi = {
	day: { avgtemp_c:number, avghumidity: number, condition: { icon: string, text: string } }
}

export const prepareDayData = (forecastDay: ForecastDayApi) =>
	({
		temp: forecastDay.day.avgtemp_c,
		humidity: forecastDay.day.avghumidity,
		conditionIcon: forecastDay.day.condition.icon,
		conditionText: forecastDay.day.condition.text,
	}) as ForecastDay;

export const getLastDate = (lastEpoch: number) => {
	const date = new Date(lastEpoch * 1000);
	return ` ${date.toLocaleDateString()} at ${date.getHours()}:${date.getMinutes()}`;
};