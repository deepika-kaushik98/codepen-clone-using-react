import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ✅ Import your DataProvider
import DataProvider from './context/DataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* ✅ Wrap App with DataProvider */}
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);

// Optional: performance reporting
reportWebVitals();

