import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes}>
    </RouterProvider>
  </React.StrictMode>,
)
