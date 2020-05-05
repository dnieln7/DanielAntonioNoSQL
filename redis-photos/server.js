const express = require('express');
const fetch = require("node-fetch");
const redis = require('redis');

// create express application instance
const server = express();

// create and connect redis client to local instance.
const client = redis.createClient(6379);

// echo redis errors to the console
client.on('error', (err) => {
    console.log("Error " + err)
});

// get photos list
server.get('/photos', (req, res) => {

    // key to store results in Redis store
    const photosRedisKey = 'user:photos';

    // Try fetching the result from Redis first in case we have it cached
    return client.get(photosRedisKey, (err, photos) => {

        // If that key exists in Redis store
        if (photos) {

            return res.json({ source: 'cache', data: JSON.parse(photos) })

        } else { // Key does not exist in Redis store

            // Fetch directly from remote api
            fetch('https://jsonplaceholder.typicode.com/photos')
                .then(response => response.json())
                .then(photos => {

                    // Save the  API response in Redis store,  data expire time in 3600 seconds, it means one hour
                    client.setex(photosRedisKey, 3600, JSON.stringify(photos));

                    // Send JSON response to client
                    return res.json({ source: 'api', data: photos })

                })
                .catch(error => {
                    // log error message
                    console.log(error);
                    // send error to the client
                    return res.json(error.toString())
                })
        }
    });
});

// start express server at 3000 port
server.listen(3000, () => {
    console.log('Server listening on port: ', 3000);
    console.log('Go to -> ' + 'http://localhost:3000/photos');
});
