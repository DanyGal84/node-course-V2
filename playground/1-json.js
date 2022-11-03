const fs = require('fs');

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const userInfoBuffer = fs.readFileSync('1-json.json');
const dataJSON = userInfoBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = 'Daniel';
data.age = 38;
const stringifyData = JSON.stringify(data);
fs.writeFileSync('1-json.json', stringifyData);
