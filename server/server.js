const express = require('express');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const app = express();
const lessonsConfig = require('./data/lessons/lessons');

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/lessons/:section/:name', (req, res) => {
    try {
        let file = fs.readFileSync(path.join(__dirname, `/data/lessons/${req.params.section}/${req.params.name}.md`));
        res.send(file);
    } catch(e) {
        res.status(404);
        res.send('This file doesn\'t exist');
    }
});

app.get('/lessonsList', (req, res) => {
    let filePaths = glob.sync(path.join(__dirname, '/data/lessons/*/*.md'));
    if (filePaths) {
        let fileStructure = {};
        
        for (let filePath of filePaths) {
            let pathDirs = path.dirname(filePath).split(path.sep);
            let dirName = pathDirs[pathDirs.length - 1];

            if (fileStructure[dirName]) {
                fileStructure[dirName].push(
                    path.basename(filePath).split('.')[0]
                );
            } else {
                fileStructure[dirName] = [
                    path.basename(filePath).split('.')[0]
                ];
            }
        }
        fileStructure = sortLessons(fileStructure, lessonsConfig);
        res.send(fileStructure);
    } else {
        res.status(404);
        res.send('No files were found');
    }
});

const sortLessons = (fileStructure, config) => {
    Array.prototype.contains = function(element){
        return this.indexOf(element) > -1;
    };

    let sections = Object.keys(fileStructure);
    let configSections = Object.keys(config);
    let sortedFileStructure = {};

    // Сортировка секций
    sections = configSections.filter(
        section => sections.contains(section)
    ).concat(
        sections.filter(
            section => !configSections.contains(section)
        )
    )

    sections.forEach(section => {
        sortedFileStructure[section] = fileStructure[section];
    });

    fileStructure = sortedFileStructure;

    //  Сортировка каждой отдельной секции
    for (let configSection of configSections) {
        if (sections.contains(configSection)) {
            /*
                Сначала в список уроков добавляются те названия, которые
                есть в конфиге, а затем все оставшиеся.
            */
            fileStructure[configSection] = lessonsConfig[configSection].filter(
                lesson => fileStructure[configSection].contains(lesson)
            )
            .concat(
                fileStructure[configSection].filter(
                    lesson => !lessonsConfig[configSection].contains(lesson)
                )
            );
        }
    }
    return fileStructure;
}

app.listen(8081, () => console.log('Server is running on port 8081'));