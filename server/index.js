const express = require("express");
const app = express();
const path = require('path');

const port = 1000;

app.get('/', (req, res) => {
    const filePath = '../dist/index.html';
    res.sendFile(path.join(__dirname, filePath));
});


app.use(express.static(path.join(__dirname, '../dist/')));

app.listen(port, () => console.log(`listening on: http://127.0.0.1:${port}`));
