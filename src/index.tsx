import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query'
import { GlobalStyle } from "./style/GlobalStyle";
import { RecoilRoot } from "recoil";
import App from './App';

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RecoilRoot>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </RecoilRoot>
);
