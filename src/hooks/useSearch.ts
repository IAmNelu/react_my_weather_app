import { useQuery } from "@tanstack/react-query";
import { getAutocomplete } from "../services/weatherService";

export const useSearch = (location: string) => {
	return useQuery({
		queryKey: ["location", location],
		queryFn: async () => {
			try {
				const response = await getAutocomplete(location);
				if (!response.ok) {
					throw new Error(`Error: ${response.status}`);
				}
				return response.json();
			} catch (error: any) {
				throw new Error(`Fetch error: ${error.message}`);
			}
		},
		refetchOnWindowFocus: false,
		enabled: false,
	});
};
