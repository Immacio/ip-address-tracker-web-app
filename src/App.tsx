import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Config from './Config';
import Router from './router';

const queryClient = new QueryClient();

const App = (): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <Router />
    {Config.nodeEnv === 'development' ? <ReactQueryDevtools initialIsOpen={false} /> : ''}
  </QueryClientProvider>
);

export default App;
