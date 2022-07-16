const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/content/index.html'));
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '/content/index.html'));
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/content/index.html'));
});

app.get('/files/promotions_slim.json', (req, res) => {
    res.sendFile(path.join(__dirname, '/content/files/promotions_slim.json'));
});

/*// Meta start

// TODO: Link with maven
let minecraftVersions = [
    {
        "version": "1.19",
        "stable": true
    }
];

// TODO: Link with github tags
// TODO: Remove things like maven
let loaderVersions = [
    {
        "separator": ".",
        "build": 0,
        "maven": "net.fabricmc:fabric-loader:0.14.8",
        "version": "1.0.0",
        "stable": true
  },
];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/meta/versions/minecraft', (req, res) => {
    res.json(minecraftVersions);
});

app.get('/meta/versions/loader', (req, res) => {
    res.json(loaderVersions);
});

// Meta end*/


app.listen(port, () => {
  console.log(`App server is running on port ${port}`);
  console.log("to end press Ctrl + C");
});
