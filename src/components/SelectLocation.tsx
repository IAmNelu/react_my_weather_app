import { LocationSearch } from "./NewLocation";

type SelectLocationProps = {
	locations: LocationSearch[];
	setSelectedId: (id: string) => void;
};

export const SelectLocation = ({
	locations,
	setSelectedId,
}: SelectLocationProps) => {
	return (
		<>
			{locations.length > 0 && (
				<ul className="menu mx-auto w-56 rounded-box bg-base-200">
					{locations.map((location) => (
						<li key={location.id}>
							<button onClick={() => setSelectedId(location.id)}>
								{location.name} - {location.country}
							</button>
						</li>
					))}
				</ul>
			)}
		</>
	);
};
