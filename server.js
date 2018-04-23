const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const axios = require('axios');
require('dotenv').config();

app.get('/api/events', (req, res) => {
  const API_KEY = process.env.REACT_APP_YELP_API_KEY;

  axios
    .get('https://api.yelp.com/v3/events', {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
