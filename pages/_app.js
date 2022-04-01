import '../styles/globals.css'
import {QueryClient, QueryClientProvider} from "react-query"
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient()

  return (
    <Provider session={pageProps.session}>
    <QueryClientProvider client={queryClient}>
  <Component {...pageProps} /></QueryClientProvider></Provider>)
}

export default MyApp
