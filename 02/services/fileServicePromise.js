import fs from "fs/promises";

export default class fileService {
    
    constructor() {
        this.dataPath = "./data/people.txt";
    }

    read() {
        fs.readFile(this.dataPath, {
            encoding: "utf-8"
        })
        .then((data) => this.readValues(data))
        .catch(() => this.error("Read"));
    }

    readValues(data) {
        data.split("\n").forEach((person) => {
            console.log(`- ${person}`);
        });
        console.log("---------------");
    }

    add(person) {
        fs.writeFile(this.dataPath, `\n${person}`, {
            encoding: "utf-8",
            flag: "a"
        })
        .then(() => this.read())
        .catch(() => this.error("Insert"));
    }

    error(str) {
        console.error(`Erreur: ${str}`);
        return;
    }
}


// const fs = require("fs/promises");

// const fileService = {

//     dataPath: "./data/people.txt",

//     read: () => {
//         fs.readFile(fileService.dataPath, {
//             encoding: "utf-8"
//         })
//         .then((data) => fileService.readValues(data))
//         .catch(() => fileService.error("Read"));
//     },

//     readValues: (data) => {
//         data.split("\n").forEach((person) => {
//             console.log(`- ${person}`);
//         });
//         console.log("---------------");
//     },

//     add: (person) => {
//         fs.writeFile(fileService.dataPath, `\n${person}`, {
//             encoding: "utf-8",
//             flag: "a"
//         })
//         .then(() => fileService.read())
//         .catch(() => fileService.error("Insert"));
//     },

//     error: (str) => {
//         console.error(`Erreur: ${str}`);
//         return;
//     }

// };

// module.exports = fileService;