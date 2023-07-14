const newsletterGenerator = require('./newsletterGenerator');

async function run() {
  try {
    // Generate the newsletter content
    const newsletterContent = await newsletterGenerator.generateNewsletter();

    // TODO: Send the newsletter content to subscribers using an email service provider

    console.log('Newsletter generated successfully!');
  } catch (error) {
    console.error('Error generating the newsletter:', error);
  }
}

// Run the program
run();
