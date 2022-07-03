import { State } from '@hooks/useUnits'
import type { HourlyForecast } from '@interfaces/weather'
import { toCelsius, toFahrenheit, toMbars, toPSI } from '@utils/converters'
import type { FC } from 'react'

type Props = HourlyForecast & {
	units: Pick<State, 'pressure' | 'speed' | 'temperature' | 'volume'>
}

export const Forecast: FC<Props> = ({
	feelsLike,
	humidity,
	icon,
	main,
	pop,
	pressure,
	temp,
	tempMax,
	tempMin,
	units,
}) => {
	return (
		<div className='flex flex-col items-center p-4 rounded-lg border'>
			<h2>
				{units.temperature === 'C' ? toCelsius(temp) : toFahrenheit(temp)}
			</h2>
			<img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={main} />
			<div className='flex items-center space-x-2'>
				<span>
					{units.temperature === 'C'
						? toCelsius(tempMin)
						: toFahrenheit(tempMin)}
				</span>
				<span>|</span>
				<span>
					{units.temperature === 'C'
						? toCelsius(tempMax)
						: toFahrenheit(tempMax)}
				</span>
			</div>
			<div className='flex items-center space-x-2'>
				<span>
					{units.temperature === 'C'
						? toCelsius(feelsLike)
						: toFahrenheit(feelsLike)}
				</span>
				<span>|</span>
				<span>{humidity}%</span>
				<span>|</span>
				<span>
					{units.pressure === 'in' ? toPSI(pressure) : toMbars(pressure)}
				</span>
				<span>|</span>
				<span>{pop * 100}%</span>
			</div>
		</div>
	)
}
