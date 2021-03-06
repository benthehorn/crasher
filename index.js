'use strict';

const express = require('express');

// Constants
const PORT = 8888;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.get('/crash', (req, res) => {
    res.send('Im going to crash now\n');
    process.exit(1);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);