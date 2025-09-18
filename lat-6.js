const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// membuat folder data
const dirpath = './data';
if (!fs.existsSync(dirpath)) {
  fs.mkdirSync(dirpath);
}

// membuat file contacts.json jika belum ada
const datapath = './data/contacts.json';
if (!fs.existsSync(datapath)) {
  fs.writeFileSync(datapath, '[]', 'utf-8');
}

// input dari user
rl.question('Masukan Nama Anda : ', (nama) => {
  rl.question('Masukan No Hp : ', (nohp) => {
    rl.question('Masukan Usia Anda : ', (usia) => {
      rl.question('Masukan Hobi Anda : ', (hobi) => {
        
        const contact = { nama, nohp, usia, hobi }; // simpan semua input user
        const file = fs.readFileSync('data/contacts.json', 'utf-8');
        const contacts = JSON.parse(file);

        contacts.push(contact);
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2)); // null,2 biar rapi

        console.log('Data berhasil disimpan!');
        rl.close();
      });
    });
  });
});
