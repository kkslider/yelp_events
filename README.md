## Yelp Events (work in progress)

This web application lets users input a location and date range and see Yelp events generated from their API geolocated on a Google Map. The project is currently built with React and Express.js.

## Getting started

1.  You will first want to pull down this repository and run `npm install` in your Terminal to download the needed dependencies.
2.  You will need a Yelp Fusion API key. Create a Yelp account if you don't have one already, and visit [Yelp Fusion API](https://www.yelp.com/developers/v3/manage_app) to create a generic project and attain an API key.
3.  You will need a Google Maps Embed API key. Visit [Google Maps APIs](https://developers.google.com/maps/documentation/embed/get-api-key) to attain an API key.
4.  Create a `.env` file inside the root folder and add two lines (without enclosing brackets):

```
REACT_APP_YELP_API_KEY={YOUR_YELP_API_KEY}
REACT_APP_GOOGLE_MAPS_EMBED_API_KEY={YOUR_GOOGLE_API_KEY}
```

5.  Create two terminal windows, and enter `npm run start` in one and `npm run express` in the other.
6.  Visit [http://localhost:3000/](http://localhost:3000/) to see the app running.
