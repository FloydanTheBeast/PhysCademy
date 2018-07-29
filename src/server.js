const express = require('express');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const app = express();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/lessons/:section/:name', (req, res) => {
    try {
        let file = fs.readFileSync(path.join(__dirname, `../lessons/${req.params.section}/${req.params.name}.md`),
        (err, data) => {
            if (err) console.log('Error while reading the file');
            else console.log(data);
        });
        res.send(file);
    } catch {
        res.status(404);
        res.send('This file doesn\'t exist');
    }
});

app.get('/lessonsList', (req, res) => {
    let filePaths = glob.sync(path.join(__dirname, '../lessons/*/*.md'));
    if (filePaths) {
        let fileStructure = {};
        
        for (let filePath of filePaths) {
            let pathDirs = path.dirname(filePath).split(path.sep);
            let dirName = pathDirs[pathDirs.length - 1];

            if (fileStructure[dirName]) {
                fileStructure[dirName].push(
                    {
                        'name': path.basename(filePath).split('.')[0],
                        'fileName': path.basename(filePath)
                    }
                );
            } else {
                fileStructure[dirName] = [
                    {
                        'name': path.basename(filePath).split('.')[0],
                        'fileName': path.basename(filePath)
                    }
                ];
            }
        }
        res.send(fileStructure);
    } else {
        res.status(404);
        res.send('No files were found');
    }
});

app.listen(8081);