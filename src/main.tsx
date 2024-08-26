import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { GlobalProvider, ErrorProvider } from './store';
import { Provider } from 'react-redux';
import { store } from './store';

const root = document.getElementById('root');

ReactDOM.createRoot(root as HTMLElement).render(
  <ErrorProvider>
    <GlobalProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </GlobalProvider>
  </ErrorProvider>
);
