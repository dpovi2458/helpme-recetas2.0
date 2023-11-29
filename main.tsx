// resources/main.tsx

import ReactDOM from 'react-dom/client'
import App from './app'
import React from 'react';

import './scss/app.scss' // <-- Aquí

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
