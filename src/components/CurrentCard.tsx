interface Props {
	today: ListDay;
}

const cloud = "https://cdn-icons-png.flaticon.com/512/414/414927.png";

export const CurrentCard = ({ today }: Props) => {
	return (
		<div className="xl:max-w-1/3 lg:max-w-1/3 md:max-w-2/3 sm:max-w-full rounded my-5 px-4 py-2 text-sky-100 font-extrabold shadow-xl bg-gray-900">
			<div className="w-full flex flex-row">
				<div className="w-1/2 pr-5">
					<div className="text-7xl">{today.temp}°C</div>
					<div className="text-xl font-light whitespace-nowrap">
						{today.weather}, {today.clouds} %
					</div>
					<div className="text-2xl">{today.place.toUpperCase()}</div>
					<div className="font-light">
						Sea Level: {today.sea_lvl} m
					</div>
				</div>
				<div className="w-1/2 pl-5">
					<img className=" max-w-72 max-h-40" src={cloud} />
				</div>
			</div>
			<div className="w-full pt-4 flex flex-row justify-between font-light text-right">
				<div className="w-1/2 flex flex-row justify-between px-2">
					<div className="w-1/2 text-left">
						<div>Feels like</div>
						<div>Wind speed</div>
					</div>
					<div className="font-bold">
						<div>{today.feels_like}°C</div>
						<div>{today.wind_spd} m/s</div>
					</div>
				</div>
				<div className="w-1/2 flex flex-row justify-between px-2">
					<div className="third-col">
						<div>Humidity</div>
						<div>Pressure</div>
					</div>
					<div className="font-bold">
						<div className="font-bold">{today.humidity} %</div>
						<div className="font-bold">{today.pressure} hPa</div>
					</div>
				</div>
			</div>
		</div>
	);
};
