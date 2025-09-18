const { error } = require('console');
const fs = require('fs');

// menuliskan string ke file (sync)
try {
 fs.writeFileSync('data/test.txt', 'Hello Shync');
} catch (e) {
 console.log(e);
}

//menuliskan string ke file (async)
fs.writeFile('data/TextDecoderStream.txt', 'Hello Asynchronous', (err) => {
  if (err) console.log(err);
});


// const fs = require('fs');   // import module fs

// Sync
// const data = fs.readFileSync('data/test.txt');
// console.log(data.toString());

// // atau langsung pakai encoding
// const data1 = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data1);
