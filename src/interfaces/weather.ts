export type OWMRawResponse = {
	alerts: Array<Alert>
	current: Current
	daily: Array<Day>
	lat: number
	lon: number
	timezone: string
	timezone_offset: number
}

type Alert = {
	description: string
	end: number // UNIX timestamp (UTC)
	event: string
	sender_name: string
	start: number // UNIX timestamp (UTC)
	tags: Array<string>
}

type Current = {
	dt: number // UNIX timestamp (UTC)
	sunrise: number // UNIX timestamp (UTC)
	sunset: number // UNIX timestamp (UTC)
	temp: number // Kelvin
	feels_like: number // Kelvin
	pressure: number
	humidity: number
	dew_point: number
	clouds: number
	uvi: number
	visibility: number
	wind_speed: number
	wind_gust: number
	wind_deg: number
	rain: Precipitation
	snow: Precipitation
	weather: Weather
}

type Day = {
	dt: number
	sunrise: number
	sunset: number
	moonset: number
	moonrise: number
	moon_phase: number
	temp: Temp
	feels_like: FeelLike
	pressure: number
	humidity: number
	dew_point: number
	wind_speed: number
	wind_gust: number
	wind_deg: number
	clouds: number
	uvi: number
	pop: number
	rain: number
	weather: Array<Weather>
}

type FeelLike = {
	morn: number // Kelvin
	day: number // Kelvin
	eve: number // Kelvin
	night: number // Kelvin
}

type Precipitation = {
	'1h': number
}

type Temp = {
	morn: number // Kelvin
	day: number // Kelvin
	eve: number // Kelvin
	night: number // Kelvin
	min: number // Kelvin
	max: number // Kelvin
}

type Weather = {
	id: number
	main: string // could be an enum
	description: string
	icon: string // could be an enum
}

export type WeatherError = {
	message: string
	status: number
}
