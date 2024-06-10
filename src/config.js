import axios from 'axios';
const cors = require('cors');

App.use(cors({
  origin: 'http://localhost:3000',
}));

// Twój token uwierzytelniający
const accessToken = 'twój-token-uwierzytelniający';

// Konfiguracja nagłówków żądania
const config = {
  headers: {
    Authorization: `Bearer ${accessToken}` // Dodanie tokenu jako nagłówek "Authorization"
  }
};

// Wykonanie żądania GET do GitHub API
axios.get('https://api.github.com/endpoint', config)
  .then(response => {
    // Obsługa odpowiedzi
    console.log(response.data);
  })
  .catch(error => {
    // Obsługa błędu
    console.error(error);
  });