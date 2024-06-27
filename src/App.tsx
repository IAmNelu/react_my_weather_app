import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Body } from "./components/Body";
import { Header } from "./components/Header";

function App() {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<Header />
			<Body />
		</QueryClientProvider>
	);
}

export default App;
