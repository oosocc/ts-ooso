import React from 'react';
import {ErrorBoundary} from "./components";
import { Routes } from './routes';
import {AppStore} from "./store";
import AppRouter from "./routes/AppRouter";
import {AppThemeProvider} from "./theme";


function App() {
  return (
      <ErrorBoundary name={"App"}>
          <AppStore>
              <AppThemeProvider>
                  <AppRouter>
                      <Routes />
                  </AppRouter>
              </AppThemeProvider>
          </AppStore>

      </ErrorBoundary>
  );
}

export default App;
