import { OWMRawResponse, WeatherError } from '@interfaces/weather'

if (typeof import.meta.env.VITE_OWM_API_KEY === 'undefined') {
	throw new Error(`
  VITE_OWM_API_KEY not defined!
    - Check .env.local.
    - Check environment variables on Vercel.
  `)
}

const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export const fetchWeather = async (
	city: string
): Promise<unknown | WeatherError> => {
	const res = await fetch(
		`${BASE_URL}/onecall?q=${city}&exclude=hourly,minutely&appid=${
			import.meta.env.VITE_OWM_API_KEY
		}`
	)

	if (!res.ok) {
		return {
			message: res.statusText,
			status: res.status,
		}
	}

	const { alerts, current, daily, lat, lon, timezone, timezone_offset } =
		(await res.json()) as OWMRawResponse

	return { alerts, current, daily, lat, lon, timezone, timezone_offset }
}
