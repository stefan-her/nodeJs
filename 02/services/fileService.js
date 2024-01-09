const fs = require("fs");


const fileService = {

    dataPath: "./data/people.txt",

    read: () => {
        fs.readFile(fileService.dataPath, {
            encoding: "utf-8"
        }, (err, data) => {
            if (!!err) this.error("Read");
            fileService.readValues(data);
        }
        );
    },

    readValues: (data) => {
        data.split("\n").forEach((person) => {
            console.log(`- ${person}`);
        });
        console.log("---------------");
    },

    add: (person) => {
        fs.writeFile(fileService.dataPath, `\n${person}`, {
            encoding: "utf-8",
            flag: "a"
        }, (err) => {
            if (!!err) fileService.error("Insert");
            fileService.read();
        }
        );
    },

    error: (str) => {
        console.error(`Erreur: ${str}`);
    }

};

module.exports = fileService;