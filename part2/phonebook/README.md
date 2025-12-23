Phonebook App

This is a phonebook application I built with React. It's got a clean, modern design that looks nice on both mobile and desktop. You can add contacts, search through them, and delete ones you don't need anymore.

Features:
- Add new contacts with name and phone number
- Search contacts in real-time
- Delete contacts (with confirmation)
- Nice looking interface with cards and smooth animations
- Works well on phones and computers
- Shows little notification messages when you do things
- Uses Google's Material icons for a professional look

I used these technologies:
- React 19 for the frontend
- Vite for fast development
- JSON Server to pretend we have a real database
- Material Symbols for icons
- Inter font for clean text
- Plain CSS for styling (no fancy frameworks)

To run this project:

First, make sure you have Node.js installed (version 16 or newer).

1. Download the code
2. Go into the phonebook folder
3. Run: npm install
4. To start the database server: npm run server
5. In another terminal: npm run dev
6. Open http://localhost:5173 in your browser

The project is organized like this:
- src/components/ has all the UI pieces
- src/services/ handles talking to the database
- db.json is the fake database file
- index.css has the styles
- index.html is the main page

The design is inspired by iOS apps - clean, simple, with good spacing and nice shadows. Everything is built to be fast and accessible.

The app talks to a fake REST API that JSON Server provides:
- GET to get all contacts
- POST to add new ones
- PUT to update existing
- DELETE to remove

Feel free to use this code or modify it. It's open source under MIT license.
