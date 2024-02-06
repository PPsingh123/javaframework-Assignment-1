const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/content', (req, res) => {
  const filePath = path.join(__dirname, 'content.txt');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading the text file');
      return;
    }
    res.send(data);
  });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
