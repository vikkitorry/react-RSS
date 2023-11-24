import type { AppProps } from 'next/app';
import '@/src/styles/globals.css';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={setupStore()}>
  <Component {...pageProps} />
  </Provider>
}
