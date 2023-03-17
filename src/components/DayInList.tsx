import { useState } from "react";
interface Props {
	day: ListDay;
}

const cloud = "https://cdn-icons-png.flaticon.com/512/414/414927.png";

export const DayInList = ({ day }: Props) => {
	return (
		<div className="sm:w-1/3 lg:w-1/6 w-full m-auto">
			<div className="m-1 bg-sky-200 px-2 py-2 rounded items-center">
				<div className="flex flex-col justify-between text-2xl font-extrabold text-gray-800">
					<div className="">{day.day}</div>
					<div className="flex flex-row">
						<div className="w-1/2 text-3xl">{day.temp}°C</div>
						<div className="w-1/2">
							<img className="w-full" src={cloud} />
						</div>
					</div>
				</div>
				<div className="w-full m-auto text-lg text-center font-bold">
					{day.weather}, {day.clouds}%
				</div>
				<div className="flex flex-row w-full pt-1 px-1 justify-between">
					<div>
						<div>Wind speed:</div>
						<div>Feels like:</div>
						<div>Humidity: </div>
						<div>Pressure: </div>
					</div>
					<div className="font-medium text-right">
						<div>{day.wind_spd} m/s</div>
						<div>{day.feels_like}°C</div>
						<div>{day.humidity}%</div>
						<div>{day.pressure} hPa</div>
					</div>
				</div>
			</div>
		</div>
	);
};
