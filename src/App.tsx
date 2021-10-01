import React from 'react';
import {ErrorBoundary} from "./components";
import { Routes } from './routes';
import {AppStore} from "./store";
import AppRouter from "./routes/AppRouter";


function App() {
  return (
      <ErrorBoundary name={"App"}>
          <AppStore>
              <AppRouter>
                  <Routes />
              </AppRouter>

          </AppStore>

      </ErrorBoundary>
  );
}

export default App;
