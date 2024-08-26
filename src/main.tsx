import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { GlobalProvider, ErrorProvider } from './store';

const root = document.getElementById('root')


ReactDOM.createRoot(root as HTMLElement).render(
  <ErrorProvider>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </ErrorProvider>
);
