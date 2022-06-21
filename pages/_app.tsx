import '../styles/globals.css'
import { usePostHog } from 'next-use-posthog'
import { POSTHOG_LINK } from '../constants/api.const'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    usePostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: POSTHOG_LINK,
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.opt_out_capturing()
      },
    })
  }

  return <Component {...pageProps} />
}

export default MyApp
