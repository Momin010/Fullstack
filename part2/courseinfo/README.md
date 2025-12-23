Course Info

A modern, beautifully styled React application for displaying course information with dark mode support.

Features

Modern UI: Clean, card-based design with Tailwind CSS
Dark Mode: Toggle between light and dark themes
Responsive: Mobile-friendly layout
Material Symbols: Beautiful icons throughout the interface
Course Display: Shows course names, parts, and total exercises

Technologies Used

React 19
Vite
Tailwind CSS (via CDN)
Google Fonts (Inter)
Material Symbols

Getting Started

Prerequisites

Node.js (v16 or higher)
npm

Installation

1. Clone the repository
2. Navigate to the courseinfo directory: cd courseinfo
3. Install dependencies: npm install

Running the Application

Start the development server: npm run dev

Open http://localhost:5173 in your browser.

Building for Production

npm run build

Preview Production Build

npm run preview

Project Structure

courseinfo/
├── src/
│   ├── components/
│   │   └── Course.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md

Styling

The application uses Tailwind CSS with a custom configuration for:
Primary color: #137fec
Background colors for light/dark modes
Inter font family
Rounded corners and shadows

Dark mode is implemented using Tailwind's class-based dark mode with a toggle button in the header.
