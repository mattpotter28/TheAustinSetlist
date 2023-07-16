require('dotenv').config();

const apiConfig = {
  ticketmaster: {
    apiKey: process.env.TICKETMASTER_API_KEY
  }
};

export default apiConfig;
