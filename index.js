const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/content/index.html'));
});

app.get('*', (req, res) => {
    let p = path.join(__dirname, '/content');
    if (fs.existsSync(path.join(p, req.url))) {
        res.sendFile(path.join(p, req.url));
    }
    else if (fs.existsSync(path.join(p, req.url + '.html'))) {
        res.sendFile(path.join(p, req.url + '.html'));
    }
    else if (fs.existsSync(path.join(p, req.url + 'l'))) {
        // For .htm -> .html
        res.sendFile(path.join(p, req.url + 'l'));
    }
    else if (fs.existsSync(path.join(p, req.url + '.htm'))) {
        res.sendFile(path.join(p, req.url + '.htm'));
    }
    else if (fs.existsSync(path.join(p, req.url + '.js'))) {
        res.sendFile(path.join(p, req.url + '.js'));
    }
    else if (fs.existsSync(path.join(p, '/js', req.url))) {
        res.sendFile(path.join(p, '/js', req.url));
    }
    else if (fs.existsSync(path.join(p, '/js', req.url + '.js'))) {
        res.sendFile(path.join(p, '/js', req.url + '.js'));
    }
    else if (fs.existsSync(path.join(p, req.url + '.css'))) {
        res.sendFile(path.join(p, req.url + '.css'));
    }
    else if (fs.existsSync(path.join(p, '/css', req.url))) {
        res.sendFile(path.join(p, '/css', req.url));
    }
    else if (fs.existsSync(path.join(p, '/css', req.url + '.css'))) {
        res.sendFile(path.join(p, '/css', req.url + '.css'));
    }
    else if (fs.existsSync(path.join(p, req.url + '.woff2'))) {
        res.sendFile(path.join(p, req.url + '.woff2'));
    }
    else if (fs.existsSync(path.join(p, '/fonts', req.url))) {
        res.sendFile(path.join(p, '/fonts', req.url));
    }
    else if (fs.existsSync(path.join(p, '/fonts', req.url + '.woff2'))) {
        res.sendFile(path.join(p, '/fonts', req.url + '.woff2'));
    }
    else if (fs.existsSync(path.join(p, '/fonts', req.url + '.woff'))) {
        res.sendFile(path.join(p, '/fonts', req.url + '.woff'));
    }
    else if (fs.existsSync(path.join(p, '/fonts', req.url + '.tff'))) {
        res.sendFile(path.join(p, '/fonts', req.url + '.tff'));
    }
    else if (fs.existsSync(path.join(p, '/fonts', req.url + '.eot'))) {
        res.sendFile(path.join(p, '/fonts', req.url + '.eot'));
    }
    else if (fs.existsSync(path.join(p, '/fonts', req.url + '.css'))) {
        res.sendFile(path.join(p, '/fonts', req.url + '.css'));
    }
    else if (fs.existsSync(path.join(p, '/fonts', req.url + '.svg'))) {
        res.sendFile(path.join(p, '/fonts', req.url + '.svg'));
    }
    else if (fs.existsSync(path.join(p, '/img', req.url))) {
        res.sendFile(path.join(p, '/img', req.url));
    }
    else if (fs.existsSync(path.join(p, req.url + '.ico'))) {
        res.sendFile(path.join(p, req.url + '.ico'));
    }
    else if (fs.existsSync(path.join(p, '/img', req.url + '.ico'))) {
        res.sendFile(path.join(p, '/img', req.url + '.ico'));
    }
    else if (fs.existsSync(path.join(p, req.url + '.png'))) {
        res.sendFile(path.join(p, req.url + '.png'));
    }
    else if (fs.existsSync(path.join(p, '/img', req.url + '.png'))) {
        res.sendFile(path.join(p, '/img', req.url + '.png'));
    }
    else if (fs.existsSync(path.join(p, req.url + '.jpg'))) {
        res.sendFile(path.join(p, req.url + '.jpg'));
    }
    else if (fs.existsSync(path.join(p, '/img', req.url + '.jpg'))) {
        res.sendFile(path.join(p, '/img', req.url + '.jpg'));
    }
    else if (fs.existsSync(path.join(p, req.url + '.jpeg'))) {
        res.sendFile(path.join(p, req.url + '.jpeg'));
    }
    else if (fs.existsSync(path.join(p, '/img', req.url + '.jpeg'))) {
        res.sendFile(path.join(p, '/img', req.url + '.jpeg'));
    }
    else {
        res.status(404).sendFile(path.join(__dirname, '/content/404.html'));
    }
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
