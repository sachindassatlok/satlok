import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Something went wrong</h1>
        <pre className="text-red-500">{error.message}</pre>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => window.location.reload()}
        >
          Try again
        </button>
      </div>
    </div>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  )
}

export default MyApp
