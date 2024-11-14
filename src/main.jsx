import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>  {/* Wrap App with HashRouter here */}
        <App />
      </HashRouter>
    </Provider>
  </StrictMode>
);
