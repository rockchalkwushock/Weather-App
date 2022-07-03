import { State } from '@hooks/useUnits'
import type { HourlyForecast } from '@interfaces/weather'
import { toCelsius, toFahrenheit, toMbars, toPSI } from '@utils/converters'
import { toHumanReadableTime } from '@utils/datetime'
import type { FC } from 'react'

type Props = HourlyForecast & {
	units: State
}

export const Forecast: FC<Props> = ({
	dt,
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
		<tr key={dt}>
			<th>
				<span>
					{toHumanReadableTime(dt, units.city, {
						weekday: 'short',
					})}
				</span>
				<img
					alt={main}
					src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
				/>
			</th>
			<th>
				{units.temperature === 'C'
					? `${toCelsius(temp)} C˚`
					: `${toFahrenheit(temp)} F˚`}
			</th>
			<th>
				{units.temperature === 'C'
					? `${toCelsius(feelsLike)} C˚`
					: `${toFahrenheit(feelsLike)} F˚`}
			</th>
			<th>
				{units.temperature === 'C'
					? `${toCelsius(tempMin)} C˚`
					: `${toFahrenheit(tempMin)} F˚`}
			</th>
			<th>
				{units.temperature === 'C'
					? `${toCelsius(tempMax)} C˚`
					: `${toFahrenheit(tempMax)} F˚`}
			</th>
			<th>{humidity}%</th>
			<th>{pop * 100}%</th>
			<th>
				{units.pressure === 'mbars' ? toMbars(pressure) : toPSI(pressure)}
			</th>
		</tr>
	)
}
