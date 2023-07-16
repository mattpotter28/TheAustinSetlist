import { get } from 'axios';
import { ticketmaster } from '../config/apiConfig';
import { formatDate } from './utils';

// Function to fetch new concerts announced
async function fetchNewConcerts() {
  const { apiKey } = ticketmaster;
  const today = new Date();
  const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000); // One week ago
  const startDate = formatDate(oneWeekAgo);
  const endDate = formatDate(today);

  try {
    const response = await get(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&startDateTime=${startDate}&endDateTime=${endDate}&city=Austin&stateCode=TX`
    );
    return response.data._embedded.events;
  } catch (error) {
    console.error('Error fetching new concerts:', error);
    return [];
  }
}

// Function to fetch concerts in the upcoming week
async function fetchUpcomingConcerts() {
  const { apiKey } = ticketmaster;
  const today = new Date();
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000); // Next week
  const startDate = formatDate(today);
  const endDate = formatDate(nextWeek);

  try {
    const response = await get(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&startDateTime=${startDate}&endDateTime=${endDate}&city=Austin&stateCode=TX`
    );
    return response.data._embedded.events;
  } catch (error) {
    console.error('Error fetching upcoming concerts:', error);
    return [];
  }
}

export default {
  fetchNewConcerts,
  fetchUpcomingConcerts
};
