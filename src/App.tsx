import { ErrorBoundary } from '@components/ErrorBoundary'
import { Forecast } from '@components/Forecast'
import { LoadingOverlay } from '@components/LoadingOverlay'
import { Select } from '@components/Select'
import { UnitGroup } from '@components/UnitGroup'
import { Weather } from '@components/Weather'
import { useForecast } from '@hooks/useForecast'
import { useUnits } from '@hooks/useUnits'
import { Suspense } from 'react'

function App() {
	const [state, dispatch] = useUnits()

	const { data } = useForecast(state.city)

	return (
		<ErrorBoundary>
			<Suspense fallback={<LoadingOverlay />}>
				<div className='container flex flex-col mx-auto space-y-6 max-w-4xl h-full min-h-screen'>
					<header className='flex flex-col justify-center items-center pt-6 space-y-6'>
						<h1 className='text-4xl text-accent'>Weather App</h1>

						<Select
							onChange={city =>
								dispatch({
									payload: city,
									type: 'CHANGE_CITY',
								})
							}
							value={state.city}
						/>

						<UnitGroup onChange={dispatch} units={state} />
					</header>
					<main className='flex flex-col flex-1 justify-center items-center space-y-8'>
						<Weather city={state.city} units={state} />

						<div className='overflow-x-auto max-w-xs md:w-full md:max-w-2xl lg:max-w-full'>
							<table className='table w-full table-compact md:table-normal'>
								<thead>
									<tr>
										<th></th>
										<th>Temp</th>
										<th>Feels Like</th>
										<th>Min</th>
										<th>Max</th>
										<th>Humidity</th>
										<th>Precipitation</th>
										<th>Pressure</th>
									</tr>
								</thead>
								<tbody>
									{data &&
										data.map(forecast => (
											<Forecast {...forecast} key={forecast.dt} units={state} />
										))}
								</tbody>
							</table>
						</div>
					</main>
					<footer className='px-4 pt-4 pb-6 footer footer-center text-base-content'>
						<span>
							Copyright © {new Date().getFullYear()} - All rights reserved by
							Cody Brunner
						</span>
					</footer>
				</div>
			</Suspense>
		</ErrorBoundary>
	)
}

export default App
