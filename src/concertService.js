const axios = require('axios');
const apiConfig = require('../config/apiConfig');
const { formatDate } = require('./utils');

// Function to fetch new concerts announced
async function fetchNewConcerts() {
  const { apiKey } = apiConfig.ticketmaster;
  const today = new Date();
  const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000); // One week ago
  const startDate = formatDate(oneWeekAgo);
  const endDate = formatDate(today);

  try {
    const response = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&startDateTime=${startDate}&endDateTime=${endDate}&city=Austin&stateCode=TX`);
    return response.data._embedded.events;
  } catch (error) {
    console.error('Error fetching new concerts:', error);
    return [];
  }
}

// Function to fetch concerts in the upcoming week
async function fetchUpcomingConcerts() {
  const { apiKey } = apiConfig.ticketmaster;
  const today = new Date();
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000); // Next week
  const startDate = formatDate(today);
  const endDate = formatDate(nextWeek);

  try {
    const response = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&startDateTime=${startDate}&endDateTime=${endDate}&city=Austin&stateCode=TX`);
    return response.data._embedded.events;
  } catch (error) {
    console.error('Error fetching upcoming concerts:', error);
    return [];
  }
}

module.exports = {
  fetchNewConcerts,
  fetchUpcomingConcerts,
};
