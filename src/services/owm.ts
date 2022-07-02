import {
	CurrentWeather,
	OWMCurrentRawResponse,
	WeatherError,
} from '@interfaces/weather'

if (typeof import.meta.env.VITE_OWM_API_KEY === 'undefined') {
	throw new Error(`
  VITE_OWM_API_KEY not defined!
    - Check .env.local.
    - Check environment variables on Vercel.
  `)
}

export const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export const fetchCurrentWeatherByCity = async (
	city: string
): Promise<CurrentWeather | WeatherError> => {
	const res = await fetch(
		`${BASE_URL}/weather?q=${city}&appid=${import.meta.env.VITE_OWM_API_KEY}`
	)

	if (!res.ok) {
		return {
			message: res.statusText,
			status: res.status,
		}
	}

	const {
		main: { feels_like, humidity, pressure, temp, temp_max, temp_min },
		name,
		sys: { country, sunrise, sunset },
		weather: [{ description, icon }],
		wind: { deg, speed },
	} = (await res.json()) as OWMCurrentRawResponse

	return {
		description,
		country,
		feelsLike: feels_like,
		humidity,
		icon,
		name,
		pressure,
		sunrise,
		sunset,
		temp,
		tempMax: temp_max,
		tempMin: temp_min,
		windDeg: deg,
		windSpeed: speed,
	}
}
