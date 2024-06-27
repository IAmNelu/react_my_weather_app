import { useWeather } from "../hooks/useWeather";
import { CurrentWeather } from "./Current";
import { ForecastWeather } from "./Forecast";
import { NewLocation } from "./NewLocation";
import { getLastDate, prepareDayData } from "../utils/utlis.ts";


export const Body = () => {
	const { data, isError, isLoading } = useWeather();

	return (
		<div className="container mx-auto max-w-xs py-5">
			{isLoading || (
				<>
					<CurrentWeather
						isLoading={isLoading}
						isError={isError}
						locationName={data.location.name}
						conditionIconUrl={data.current.condition.icon}
						temp={data.current.temp_c}
						tempFelt={data.current.feelslike_c}
						humidity={data.current.humidity}
						conditionText={data.current.condition.text}
					/>
					<ForecastWeather
						isLoading={isLoading}
						tomorrow={prepareDayData(data.forecast.forecastday[1])}
						tomorrow2={prepareDayData(data.forecast.forecastday[2])}
					/>
					<div className="pt-3 text-end text-sm italic text-neutral-400">
						Last update on
						{getLastDate(data.current.last_updated_epoch)}
					</div>
					<div className="divider my-4"></div>
					<NewLocation />
				</>
			)}
		</div>
	);
};
