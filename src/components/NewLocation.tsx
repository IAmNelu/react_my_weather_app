import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { getAutocomplete } from "../services/weatherService";
import { OtherLocationForecast } from "./OtherLocationForecast";
import { SelectLocation } from "./SelectLocation";

type FormValues = {
	city: string;
};

export type LocationSearch = {
	id: string;
	name: string;
	country: string;
	region: string;
};

const doSearch = async (location: string) => {
	try {
		const response = await getAutocomplete(location);
		if (!response.ok) {
			throw new Error(`Error: ${response.status}`);
		}
		return response.json();
	} catch (error: any) {
		throw new Error(`Fetch error: ${error.message}`);
	}
};

export const NewLocation = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormValues>();

	const handleSearchCity: SubmitHandler<FormValues> = ({
		city,
	}: FormValues) => {
		doSearch(city).then((data) => setAvailableLocations(data));
		setSelectedId("");
		reset();
	};

	const [selectedId, setSelectedId] = useState<string>("");
	const [availableLocations, setAvailableLocations] = useState<
		LocationSearch[]
	>([]);
	return (
		<>
			<form className="flex" onSubmit={handleSubmit(handleSearchCity)}>
				<label
					className={`input input-bordered flex items-center gap-2 ${errors.city && "input-error"}`}
				>
					<input
						type="text"
						className="grow"
						placeholder="Turin, Rome, ..."
						{...register("city", { required: true })}
					/>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						className={`h-4 w-4 opacity-70 ${errors.city && "text-error"}`}
					>
						<path
							fillRule="evenodd"
							d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
							clipRule="evenodd"
						/>
					</svg>
				</label>
				<button className="btn ms-2">Search</button>
			</form>
			<div className="label">
				{errors.city && (
					<span className="label-text-alt text-error">
						Please add a valid city
					</span>
				)}
			</div>
			{selectedId && selectedId !== "" ? (
				<OtherLocationForecast locationId={selectedId} />
			) : (
				<SelectLocation
					locations={availableLocations}
					setSelectedId={setSelectedId}
				/>
			)}
		</>
	);
};
