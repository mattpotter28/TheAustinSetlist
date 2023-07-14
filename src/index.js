const fs = require('fs');
const { generateNewsletter } = require('./newsletterGenerator');

async function generateAndSaveNewsletter() {
  try {
    // Generate the newsletter content
    const newsletterContent = await generateNewsletter();

    // Read the contents of newsletterTemplate.html
    const templateContent = fs.readFileSync('templates/newsletterTemplate.html', 'utf8');

    // Replace the placeholder sections with the generated content
    const finalContent = templateContent
      .replace('<!-- Concert entries for new concerts will be dynamically inserted here -->', newsletterContent.newConcertsHTML)
      .replace('<!-- Concert entries for upcoming concerts will be dynamically inserted here -->', newsletterContent.upcomingConcertsHTML);

    // Write the final content to the newsletter.html file
    fs.writeFileSync('newsletter.html', finalContent);

    console.log('Newsletter generated and saved successfully!');
  } catch (error) {
    console.error('Error generating and saving the newsletter:', error);
  }
}

// Call the function to generate and save the newsletter
generateAndSaveNewsletter();
