import { useWeather } from "../hooks/useWeather";
import { CurrentWeather } from "./Current";
import { ForecastWeather } from "./Forecast.tsx";
import { getLastDate, prepareDayData } from "../utils/utlis.ts";

type OtherLocationForecastProps = {
	locationId: string;
};

export const OtherLocationForecast = ({
	locationId,
}: OtherLocationForecastProps) => {
	const { data, isLoading, isError } = useWeather(locationId);
	return (
		isLoading ? <div>Loading ...</div>:
			<><CurrentWeather
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
			</>
	);
};
