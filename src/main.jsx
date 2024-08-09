import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import { GlobalProvider, ErrorProvider } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorProvider>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </ErrorProvider>
);
