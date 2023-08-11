import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DonorProvider } from './context/DonorContext';
import { GroupProvider } from './context/GroupContext';
import { CampaignProvider } from './context/CampaignContext';
import 'bootstrap/dist/css/bootstrap.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CampaignProvider>
    <DonorProvider>
      <GroupProvider>
        <App />
      </GroupProvider>
    </DonorProvider>
    </CampaignProvider>
  </React.StrictMode>
);
