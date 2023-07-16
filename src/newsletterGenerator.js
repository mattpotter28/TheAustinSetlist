import concertService from './concertService';

// Function to generate the newsletter content
async function generateNewsletter() {
  // Fetch new concerts announced and upcoming concerts
  const newConcerts = await concertService.fetchNewConcerts();
  const upcomingConcerts = await concertService.fetchUpcomingConcerts();

  // Generate HTML content for new concerts section
  const newConcertsHTML = generateConcertsHTML(newConcerts);

  // Generate HTML content for upcoming concerts section
  const upcomingConcertsHTML = generateConcertsHTML(upcomingConcerts);

  // Combine the sections into the final newsletter HTML
  const newsletterHTML = `
    <h2>New Concerts Announced</h2>
    ${newConcertsHTML}

    <h2>Upcoming Concerts</h2>
    ${upcomingConcertsHTML}
  `;

  return newsletterHTML;
}

// Helper function to generate HTML for concert entries
function generateConcertsHTML(concerts) {
  return concerts
    .map((concert) => {
      const { name, dates, _embedded } = concert;
      const { start } = dates;
      const { attractions } = _embedded;
      const artists = attractions
        .map((attraction) => attraction.name)
        .join(', ');
      const openers = attractions
        .slice(1)
        .map((attraction) => attraction.name)
        .join(', ');

      return `
        <div>
          <h3>${name}</h3>
          <p>Artists: ${artists}</p>
          ${openers ? `<p>Openers: ${openers}</p>` : ''}
          <p>Date: ${start.localDate}</p>
          <p>Venue: ${concert._embedded.venues[0].name}</p>
        </div>
      `;
    })
    .join('');
}

export default {
  generateNewsletter
};
