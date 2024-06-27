export interface ForecastDay {
	temp: number;
	humidity: number;
	conditionIcon: string;
	conditionText: string;
}

export interface ForecastWeatherProps {
	isLoading: boolean;
	tomorrow: ForecastDay;
	tomorrow2: ForecastDay;
}

const ForecastDay = ({
	temp,
	humidity,
	conditionIcon,
	conditionText,
}: ForecastDay) => {
	return (
		<div className="flex items-center">
			<img src={conditionIcon} alt={`Tomorrow will be ${conditionText}`} />
			<div>
				<div>
					<span className="me-2">T:</span>
					<span className="">{temp}</span>
					<span className="">°C</span>
				</div>
				<div>
					<span className="me-2">H:</span>
					<span className="">{humidity}</span>
					<span className="">%</span>
				</div>
			</div>
		</div>
	);
};

export const ForecastWeather = ({
	isLoading,
	tomorrow,
	tomorrow2,
}: ForecastWeatherProps) => {
	return (
		<>
			{isLoading || (
				<div className="join w-full">
					<div className="card join-item grow bg-base-100 shadow-xl">
						<div className="card-body p-2">
							<ForecastDay
								temp={tomorrow.temp}
								humidity={tomorrow.humidity}
								conditionIcon={tomorrow.conditionIcon}
								conditionText={tomorrow.conditionText}
							/>
							<span className="text-center italic text-neutral-500">
								Tomorrow
							</span>
						</div>
					</div>
					<div className="card join-item grow bg-base-100 shadow-xl">
						<div className="card-body p-2">
							<ForecastDay
								temp={tomorrow2.temp}
								humidity={tomorrow2.humidity}
								conditionIcon={tomorrow2.conditionIcon}
								conditionText={tomorrow2.conditionText}
							/>
							<span className="text-center italic text-neutral-500">
								{new Date().toLocaleDateString()}
							</span>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
