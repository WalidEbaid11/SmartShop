import axios from 'axios';

// API Configuration
export const apiConfig = {
  taager: {
    baseURL: process.env.VITE_TAAGER_API_URL,
    apiKey: process.env.VITE_TAAGER_API_KEY,
  },
  aliexpress: {
    baseURL: process.env.VITE_ALIEXPRESS_API_URL,
    apiKey: process.env.VITE_ALIEXPRESS_API_KEY,
  },
  stripe: {
    publicKey: process.env.VITE_STRIPE_PUBLIC_KEY,
  },
  paypal: {
    clientId: process.env.VITE_PAYPAL_CLIENT_ID,
  },
};

// Create API instances
export const taagerApi = axios.create({
  baseURL: apiConfig.taager.baseURL,
  headers: {
    'Authorization': `Bearer ${apiConfig.taager.apiKey}`,
    'Content-Type': 'application/json',
  },
});

export const aliexpressApi = axios.create({
  baseURL: apiConfig.aliexpress.baseURL,
  headers: {
    'Authorization': `Bearer ${apiConfig.aliexpress.apiKey}`,
    'Content-Type': 'application/json',
  },
});