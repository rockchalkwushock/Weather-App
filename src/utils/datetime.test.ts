import { toHumanReadableTime } from './datetime'

describe('datetime.ts', () => {
	test('prints human readable time for Bogota', () => {
		expect(toHumanReadableTime(1655025865, 'Bogota')).toEqual('04:24')
	})
	test('prints human readable time for Cairo', () => {
		expect(toHumanReadableTime(1655025865, 'Cairo')).toEqual('11:24')
	})
	test('prints human readable time for Kiev', () => {
		expect(toHumanReadableTime(1655025865, 'Kiev')).toEqual('12:24')
	})
	test('prints human readable time for Lawrence', () => {
		expect(toHumanReadableTime(1655025865, 'Lawrence')).toEqual('04:24')
	})
	test('prints human readable time for London', () => {
		expect(toHumanReadableTime(1655025865, 'London')).toEqual('10:24')
	})
	test('prints human readable time for Moscow', () => {
		expect(toHumanReadableTime(1655025865, 'Moscow')).toEqual('12:24')
	})
	test('prints human readable time for Paris', () => {
		expect(toHumanReadableTime(1655025865, 'Paris')).toEqual('11:24')
	})
	test('prints human readable time for Portland', () => {
		expect(toHumanReadableTime(1655025865, 'Portland')).toEqual('02:24')
	})
	test('prints human readable time for Shanghai', () => {
		expect(toHumanReadableTime(1655025865, 'Shanghai')).toEqual('17:24')
	})
	test('prints human readable time for Tokyo', () => {
		expect(toHumanReadableTime(1655025865, 'Tokyo')).toEqual('18:24')
	})
	test('prints human readable time for Tunis', () => {
		expect(toHumanReadableTime(1655025865, 'Tunis')).toEqual('10:24')
	})
})
