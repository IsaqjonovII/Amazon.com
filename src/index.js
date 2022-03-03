import React, { Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import "./language/i18next";
import { BrowserRouter } from 'react-router-dom';
import reducer, { initialState } from './context/reducer';
import { StateProvider } from './context/StateProvider';
const App = lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <StateProvider initialState={initialState} reducer={reducer}>
      <Suspense fallback={<p>Loading the Content...</p>}>
        <App />
      </Suspense>
     </StateProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// 1 BrowserRouter import qilamiz
// 2 BrowserRouter > App ni BrowserRouter ga o'rab qo'yamiz
//  <BrowserRouter>
//    <App />
//  </BrowserRouter>