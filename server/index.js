const express = require("express");
const app = express();
const path = require('path');


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, `../dist/index.html`))
})

app.use(express.static(path.join(__dirname, `../dist/`)));

app.listen(1000);