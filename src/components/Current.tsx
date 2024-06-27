const LoadingHead = () => {
	return (
		<div className="flex items-center justify-between">
			<div className="skeleton h-9 w-28"></div>
			<div className="h-15 w-15 skeleton shrink-0 rounded-full"></div>
		</div>
	);
};

const ShowHead = ({ location, url }: { location: string; url: string }) => {
	return (
		<div className="flex items-center justify-between">
			<div className="w-28 text-3xl"> {location}</div>
			<div className="h-15 w-15 shrink-0 rounded-full">
				<img src={url} />
			</div>
		</div>
	);
};

interface CurrentWeatherProps {
	isLoading: boolean;
	isError: boolean;
	locationName: string;
	conditionIconUrl: string;
	temp: number;
	tempFelt: number;
	humidity: number;
	conditionText: string;
}

export const CurrentWeather = ({
	isLoading,
	locationName,
	conditionIconUrl,
	temp,
	tempFelt,
	humidity,
	conditionText,
}: CurrentWeatherProps) => {
	return (
		<>
			<div>
				{isLoading ? (
					<LoadingHead />
				) : (
					<ShowHead location={locationName} url={conditionIconUrl} />
				)}
			</div>
			<div className="flex justify-between">
				<div className="flex flex-row items-end text-3xl">
					<span className="me-2">T:</span>
					<span className="">{temp}</span>
					<span className="">°C</span>
				</div>
				<div>
					<div className="text-gray-600">
						<span className="text-xs italic">Felt:</span>
						<div className="-mt-3 text-2xl">
							<span className="me-2 ">T:</span>
							<span className="">{tempFelt}</span>
							<span className="">°C</span>
						</div>
					</div>
				</div>
				<div>
					<div className="text-gray-600">
						<span className="text-xs italic">Humidity:</span>
						<div className="-mt-3 text-2xl">
							<span className="me-2">H:</span>
							<span className="">{humidity}</span>
							<span className="">%</span>
						</div>
					</div>
				</div>
			</div>
			<p className="my-6">Today is {conditionText}</p>
		</>
	);
};
