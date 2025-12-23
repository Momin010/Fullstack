# Countries App

A modern React application for searching and exploring countries around the world, built with Vite, React, and Tailwind CSS.

## Features

- Search Countries: Filter countries by name with real-time search
- Country Details: View detailed information including capital, area, languages, and flag
- Weather Information: Get current weather data for each country's capital using Open-Meteo API
- Responsive Design: Clean, modern UI with dark mode support
- Fast Performance: Built with Vite for optimal development and build speeds

## Technologies Used

- React 18 - UI library with hooks
- Vite - Build tool and dev server
- Tailwind CSS - Utility-first CSS framework
- Axios - HTTP client for API requests
- Open-Meteo API - Free weather data (no API key required)
- REST Countries API - Country data source
- Material Symbols - Icon library

## Project Structure

src/
├── components/
│   ├── Search.jsx          # Search input component
│   ├── CountryList.jsx     # List of countries with show buttons
│   ├── Country.jsx         # Detailed country information
│   └── Weather.jsx         # Weather display component
├── services/
│   └── weatherService.js   # Open-Meteo API integration
├── utils/
│   └── weatherCodes.js     # Weather code to text mapping
├── App.jsx                 # Main app component
└── main.jsx                # App entry point

## Getting Started

1. Install dependencies:
   npm install

2. Start development server:
   npm run dev

3. Build for production:
   npm run build

4. Preview production build:
   npm run preview

## API Usage

The app uses two external APIs:

- REST Countries API (https://studies.cs.helsinki.fi/restcountries/api/all) - Provides country data
- Open-Meteo API (https://api.open-meteo.com/v1/forecast) - Provides weather data without API key

## Styling

- Uses Tailwind CSS for responsive, utility-first styling
- Includes dark mode support with dark: classes
- Material Symbols for icons
- Inter font for clean typography
- Rounded corners and subtle shadows for modern look

## Components Overview

- Search: Input field with search icon for filtering countries
- CountryList: Displays filtered countries as cards with initials and show buttons
- Country: Shows detailed country info including flag, capital, area, languages, and weather
- Weather: Displays current weather with temperature, wind, and conditions

## Development

The project includes ESLint configuration for code quality. Run linting with:

npm run lint

## License

This project is part of a React learning course and is for educational purposes.
