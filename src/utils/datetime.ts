import { City } from '@interfaces/weather'

const timeZoneMap = {
	Bogota: 'America/Bogota',
	Cairo: 'Africa/Cairo',
	Kiev: 'Europe/Kiev',
	Lawrence: 'America/Chicago',
	London: 'Europe/London',
	Moscow: 'Europe/Moscow',
	Paris: 'Europe/Paris',
	Portland: 'America/Los_Angeles',
	Shanghai: 'Asia/Shanghai',
	Tokyo: 'Asia/Tokyo',
	Tunis: 'Africa/Tunis',
}

export const toHumanReadableTime = (unixTimestamp: number, city: City) => {
	const { locale } = new Intl.DateTimeFormat().resolvedOptions()
	return new Intl.DateTimeFormat(locale, {
		hour: '2-digit',
		hour12: false,
		minute: '2-digit',
		timeZone: timeZoneMap[city],
	}).format(new Date(unixTimestamp * 1000))
}
