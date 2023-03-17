import { CurrentCard } from "./components/CurrentCard";
import { DayInList } from "./components/DayInList";
import { InputCity } from "./components/InputCity";
import { useState } from "react";

const weather: ListDay[] = [
	{
		place: "Frolovo",
		day: "Friday",
		weather: "broken clouds",
		temp: 23,
		pressure: 1014,
		clouds: 67,
		sea_lvl: 1014,
		humidity: 69,
		wind_spd: 2.72,
		feels_like: 23,
	},
	{
		place: "Frolovo",
		day: "Saturday",
		weather: "broken clouds",
		temp: 23,
		pressure: 1014,
		clouds: 67,
		sea_lvl: 1014,
		humidity: 69,
		wind_spd: 2.72,
		feels_like: 23,
	},
	{
		place: "Frolovo",
		day: "Sunday",
		weather: "broken clouds",
		temp: 23,
		pressure: 1014,
		clouds: 67,
		sea_lvl: 1014,
		humidity: 69,
		wind_spd: 2.72,
		feels_like: 23,
	},
	{
		place: "Frolovo",
		day: "Monday",
		weather: "broken clouds",
		temp: 23,
		pressure: 1014,
		clouds: 67,
		sea_lvl: 1014,
		humidity: 69,
		wind_spd: 2.72,
		feels_like: 23,
	},
	{
		place: "Frolovo",
		day: "Tuesday",
		weather: "broken clouds",
		temp: 23,
		pressure: 1014,
		clouds: 67,
		sea_lvl: 1014,
		humidity: 69,
		wind_spd: 2.72,
		feels_like: 23,
	},
	{
		place: "Frolovo",
		day: "Wednesday",
		weather: "broken clouds",
		temp: 23,
		pressure: 1014,
		clouds: 67,
		sea_lvl: 1014,
		humidity: 69,
		wind_spd: 2.72,
		feels_like: 23,
	},
];

function App() {
	const [list, setList] = useState(weather);
	return (
		<div className="flex flex-col items-center m-auto w-full">
			<InputCity />
			<CurrentCard today={list[0]} />
			<div className="w-3/4 flex flex-row flex-wrap justify-center">
				{list.map((day, index) => (
					<DayInList key={index} day={day} />
				))}
			</div>
		</div>
	);
}

export default App;
