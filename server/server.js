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

app.get('/persons/:name', (req, res) => {
    const basePath = path.join(__dirname, `/data/persons/${req.params.name}/`);
    const personsInfo = JSON.parse(fs.readFileSync(path.join(basePath, 'data.json')));
    const personsBio = fs.readFileSync(path.join(basePath, 'bio.md'));

    res.send({
        info: personsInfo,
        bio: personsBio.toString()
    });
});

app.get('/personsList', (req, res) => {
    const filePaths = glob.sync(path.join(__dirname, '/data/persons/*/*.json'));
    let listOfPersons = {};

    for (let filePath of filePaths) {
        const personsData = JSON.parse(fs.readFileSync(filePath));
        const pathDirs = path.dirname(filePath).split(path.sep);
        const personsName = pathDirs[pathDirs.length - 1];

        listOfPersons[personsName] = personsData;
    }
    
    res.send(listOfPersons);
});

app.get('/books/:name', (req, res) => {
    const file = fs.readFileSync(path.join(__dirname, `data/books/${req.params.name}.json`));
    res.send(file);
});

app.get('/booksList', (req, res) => {
    const filePaths = glob.sync(path.join(__dirname, 'data/books/*.json'));
    console.log(filePaths)
    let listOfBooks = []

    for (filePath of filePaths) {
        const bookName = path.basename(filePath);

        listOfBooks.push(bookName);
    }

    res.send(listOfBooks);
});

const sortLessons = (fileStructure, config) => {
    Array.prototype.contains = element => {
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