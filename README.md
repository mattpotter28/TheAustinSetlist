# The Austin Setlist

The Austin Setlist is a newsletter that provides music enthusiasts in Austin, Texas with weekly updates on new concerts announced and upcoming concerts in the area. Stay up-to-date with the vibrant music scene of Austin, the Live Music Capital of the World!

## Features

- **New Concerts Announced**: Get the scoop on recently announced concerts in Austin.
- **Upcoming Concerts**: Stay informed about the exciting concerts happening in the upcoming week.
- **Artist and Venue Information**: Each entry includes details such as artist names, any openers, date, and venue.

## How It Works

The Austin Setlist is powered by the Ticketmaster API, which provides access to a wide range of concert data. The project utilizes JavaScript to fetch concert information, filter it based on date ranges, and generate an HTML newsletter with separate sections for new concerts announced and upcoming concerts. The generated newsletter can be easily sent to subscribers using an email service provider.

## Directory Structure

The project follows the following directory structure:

- `src/`: Contains the main source code files of the project.
- `templates/`: Holds the HTML template and associated styles for the newsletter.
- `config/`: Contains configuration files, including the Ticketmaster API key.
- `package.json`: Includes project configuration and dependencies.
- `README.md`: You are here! Provides an overview and instructions for the project.

## Usage

To use The Austin Setlist project:

1. Clone the repository: `git clone https://github.com/your-username/TheAustinSetlist.git`
2. Install dependencies: `npm install` or `yarn install`
3. Configure the Ticketmaster API key in `config/apiConfig.js`.
4. Customize the HTML template and CSS styles in `templates/newsletterTemplate.html` and `templates/styles.css`, respectively.
5. Implement the necessary functionality in the source code files within the `src/` directory.
6. Generate and send the newsletter to subscribers using an email service provider.

## Contributing

Contributions to The Austin Setlist project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

The Austin Setlist project is licensed under the [MIT License](LICENSE).
