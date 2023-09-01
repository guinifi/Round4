const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public')); // Put your static files like HTML in a folder named "public"

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/appform.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});
