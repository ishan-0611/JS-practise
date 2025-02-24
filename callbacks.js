// Import Node Filesystem Module (callback version)
import fs from "node:fs";

fs.readFile('./data.json', 'utf8', (err, data) => {
    if(err)
    {
        console.log('Error reading data from the file.');
        throw err;
    }
    try
    {
        const dataObj = JSON.parse(data);
        console.log(dataObj);
        console.log('Completed');
    }
    catch(err)
    {
        console.log('Cannot parse the JSON from the file');
        throw err;
    }
});