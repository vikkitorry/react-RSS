import type { AppProps } from 'next/app';
import '@/src/styles/globals.css';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';
import { Layout } from '@/components/Layout/Layout';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Provider store={setupStore()}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ErrorBoundary>
  );
}
