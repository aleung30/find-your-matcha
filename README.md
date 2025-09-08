# Find Your Matcha

## Overview
 Find Your Matcha is a web platform that allows users to discover and review matcha cafes. Users can search for cafes that sell matcha, submit reviews, and explore an interactive map of matcha spots in the Lower Mainland. The application uses **Supabase** for backend services and **Mapbox API** for map integration.

## Features
- **User Authentication**: Register and log in to leave reviews.
- **Review System**: Users can submit ratings and comments for matcha cafes.
- **Interactive Map**: Displays matcha cafes near the user, allowing for easy discovery.
- **Search Functionality**: Users can search for matcha cafes using the Mapbox API.

## Technologies Used
- **Frontend**: React, Tailwind CSS
- **Backend**: Supabase (PostgreSQL database, authentication, and API)
- **Maps & Location**: Mapbox API, Geocoding API
- **Routing**: React Router

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- Supabase project set up with tables for matcha cafes and reviews
- Mapbox API key
- Geocoding API key

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/aleung30/find-your-matcha.git
   cd find-your-matcha
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your **Supabase URL**, **Supabase Anon Key**, **Mapbox API Key**, and **Geocoding API Key**:
     ```sh
     VITE_SUPABASE_URL=your_supabase_url
     VITE_SUPABASE_KEY=your_supabase_anon_key
     VITE_MAPBOX_KEY=your_mapbox_access_token
     VITE_GEOCODE_KEY=your_geocode_key
     ```

### Running the App
To start the development server:
```sh
npm run dev
```
The app will be available at `http://localhost:5173`

## What We Learned
Through building this project, we gained experience in:
- **Figma Prototyping**: Designing UI and interactive elements.
- **React**: Gaining experience with component-based architecture, state management, and handling user interactions.
- **Supabase Integration**: Managing authentication and database interactions.
- **Mapbox API**: Displaying interactive maps and fetching location-based data.

## Future Improvements
- Implement filtering by rating and distance
- Improve UI/UX based on user feedback

## Contributors
- Anita Leung
- Justinne Baltazar
- Rio Maruyama