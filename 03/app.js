'use strict';

const express = require('express');
const app = express();

const router = require('./routers');

// const MESSAGE = process.env.MESSAGE;
// const PORT = process.env.PORT;

const { MESSAGE, PORT} =  process.env;

// app.get('/demo', (req, res)  => {
//     res.json({
//         "message" : `Message -> ${MESSAGE}`
//     });
// });

app.use(router);

app.listen(PORT, () => {
    console.log(`WEB API running on port ${PORT}`)
});