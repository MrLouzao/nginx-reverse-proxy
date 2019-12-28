const express = require('express');
const app = express();


// Define api endpoints
app.get('/', (req, res) => {
    res.send({
        version: '1.0.0',
        health: 'OK'
    })
});


// Run server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`You are under 7 proxies? Running on port ${port}`);
})