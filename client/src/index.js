import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DonorProvider } from './context/DonorContext';
import { GroupProvider } from './context/GroupContext';
import 'bootstrap/dist/css/bootstrap.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <DonorProvider>
      <GroupProvider>
        <App />
      </GroupProvider>
    </DonorProvider>
  </React.StrictMode>
);
