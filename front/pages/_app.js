import '@/styles/globals.css'

import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }) {
  <GoogleAnalytics trackPageViews />
  return <Component {...pageProps} />
}
