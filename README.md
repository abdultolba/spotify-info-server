# Spotify Stats Server

View and observe your top artists and tracks from your Spotify profile.
Your spotify profile's top artists and tracks with charts and playlist creator.

## Installation

1. Register a developer application with [Spotify](https://developer.spotify.com/documentation/web-api/quick-start).

2. Initialize the client keys for the Spotify application, redirect and callback url here.

   ```bash
   cp .env.example .env
   ```

3. Install dependencies

   ```bash
   npm install
   ```

   or

   ```bash
   npm i
   ```

4. Run the server and watch its files

   ```bash
   npm start
   ```

## Built with

- [Express](https://expressjs.com/)
- [Netlify Lambda](https://github.com/netlify/netlify-lambda)
- [Serverless Http](https://github.com/dougmoscrop/serverless-http)
