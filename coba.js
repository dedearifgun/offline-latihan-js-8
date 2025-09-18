//function cetakNama(nama) {
//    return `Halo, nama saya ${nama}`;
//}
//const PI =3.14;
//module.exports = cetakNama;
//module.exports.PI = PI;
// module.exports = {cetakNama, PI}; // cara lain export banyak

function cetakNama(nama) {
    return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

// Export banyak sekaligus
module.exports = { cetakNama, PI };
