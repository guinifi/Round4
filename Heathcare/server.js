const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // PORT environment variable is important for Azure

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
