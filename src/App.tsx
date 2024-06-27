import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Body } from "./components/Body";
import { Header } from "./components/Header";

function App() {
	const queryClient = new QueryClient();
	console.log(import.meta.env.VITE_WEATHER_API_KEY);
	return (
		<QueryClientProvider client={queryClient}>
			<Header />
			<Body />
		</QueryClientProvider>
	);
}

export default App;
