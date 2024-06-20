/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';
import { configureAppStore, history } from 'store/configureStore';
import { GlobalStyle } from 'styles/globalStyles';
import { ThemeProvider } from 'styles/theme/ThemeProvider';
import { App } from './app/index';
import reportWebVitals from './reportWebVitals';

// Initialize languages
import './locales/i18n';

const store = configureAppStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router history={history}>
        <ThemeProvider>
          <HelmetProvider>
            <GlobalStyle />
            <App />
          </HelmetProvider>
        </ThemeProvider>
      </Router>
    </BrowserRouter>
  </Provider>,
);

reportWebVitals();
