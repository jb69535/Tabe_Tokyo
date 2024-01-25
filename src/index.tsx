import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Get the root div element
const rootElement = document.getElementById('root');

// Check if the root element exists
if (rootElement) {
  // Create a root
  const root = createRoot(rootElement);

  // Render the App component
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
