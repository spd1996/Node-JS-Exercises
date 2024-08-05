//8. Node.js File Handling
//a. Create a Node.js script to read the content of a text file synchronously. Print the content to the console.

import { readFileSync } from 'fs';

const filePath = './node.txt';

try {
    const data = readFileSync(filePath, 'utf8');
    console.log(data);
} catch (err) {
    console.error('Error reading file:', err);
}

//b. Modify the script to read the content of the file asynchronously. Use a callback function to handle the
//file content.

import { readFile } from 'fs';

readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data);
});

//c. Implement a function to append text to an existing file using Node.js. 
// Test it by appending text to a sample file.

import { appendFile } from 'fs';

function appendToFile(filePath, text, callback) {
    appendFile(filePath, text, 'utf8', (err) => {
        if (err) {
            callback(err);
        } else {
            callback(null, 'Text appended successfully');
        }
    });
}

const textToAppend = '\nNew text to appended.';

appendToFile('./neo.txt', textToAppend, (err, message) => {
    if (err) {
        console.error('Error appending text to file:', err);
    } else {
        console.log(message);
    }
});

//d. Write a Node.js script to delete a file from the file system. Handle errors appropriately.

import { unlink } from 'fs';

function deleteFile(filePath, callback) {
    unlink(filePath, (err) => {
        if (err) {
            callback(`Error deleting file: ${err.message}`);
        } else {
            callback(null, 'File deleted successfully');
        }
    });
}

deleteFile('./neo.txt', (err, message) => {
    if (err) {
        console.error(err);
    } else {
        console.log(message);
    }
});

//e. Explore the 'fs' module documentation and find out how to check if a file exists using Node.js.

import { existsSync } from 'fs';

if (existsSync(filePath)) {
    console.log(`${filePath} exists.`);
} else {
    console.log(`${filePath} does not exist.`);
}







