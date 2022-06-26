import { ErrorBoundary } from '@components/ErrorBoundary'
import { LoadingOverlay } from '@components/LoadingOverlay'
import { Suspense } from 'react'

function App() {
	return (
		<ErrorBoundary>
			<Suspense fallback={<LoadingOverlay />}>
				<h1>Hello</h1>
			</Suspense>
		</ErrorBoundary>
	)
}

export default App
