import { useQuery } from "@tanstack/react-query";
import {
	getForecastAuto,
	getForecastLocation,
} from "../services/weatherService";

export const useWeather = (location?: string) => {
	let queryFn = undefined;
	if (!location) queryFn = getForecastAuto;
	else queryFn = () => getForecastLocation(location);
	return useQuery({
		queryKey: ["weatherData", location],
		queryFn: async () => {
			try {
				const response = await queryFn();
				if (!response.ok) {
					throw new Error(`Error: ${response.status}`);
				}
				return response.json();
			} catch (error: any) {
				throw new Error(`Fetch error: ${error.message}`);
			}
		},
	});
};
