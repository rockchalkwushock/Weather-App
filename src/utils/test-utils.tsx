import { DataClient, DataProvider } from '@services/data'
import type { RenderOptions } from '@testing-library/react'
import { cleanup, render } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => cleanup())

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
	render(ui, {
		wrapper: ({ children }) => (
			<DataProvider client={new DataClient()}>{children}</DataProvider>
		),
		...options,
	})

export { default as userEvent } from '@testing-library/user-event'
// eslint-disable-next-line import/export
export * from '@testing-library/react'
// eslint-disable-next-line import/export
export { customRender as render }
