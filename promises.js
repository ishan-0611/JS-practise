// Import Node Module (Promises version)
import { rejects } from "node:assert";
import fsc from "node:fs";
import fs from "node:fs/promises";
import { resolve } from "node:path";

// Reading the file from Promises API
fs.readFile('./data.json', 'utf-8').then(
    data => {
        const dataObj = JSON.parse(data);
        console.log(dataObj);
        console.log("Completed.");
    })
    .then(() => readFile('data.json'))
    .then(data => console.log(data))
    .catch(err => {
        console.log('Could not complete action.');
        throw err;
    });

// Create a custom promise with the Callback API
const readFile = async(filename) => {
    return new Promise((resolve, reject) => {
        fsc.readFile('data.json', 'utf8', (err, data) => {
            if(err) reject(err);
            resolve(data);
        });
    });
}