let warung = {
    minuman : 'es Teh Manis',
    makanan : 'nasi telor',
    hargaMinuman : 4000,
    hargaMakanan : 10000,
    murah : true,
    makananLagi : ['minastel', 'nasi ayam', 'nasi bakar']
};
console.log(warung)

console.log('====');

let rumah = {
    jendela : 2,
    bangku : 7,
    merkBaju : 'HnM',
    merkMotor : 'Vario',
    merkgalon : true,
    makananLagi : ['minastel', 'nasi ayam', 'nasi bakar']
};
console.log(rumah)

console.log('====')
let kampus = {
    mikrosokop : 7,
    ruangan : 15,
    bola1 : 'basket',
    bola2 : 'futsal',
    adaLapangan : true,
    barangKmapus : ['miksroskop', 'dosen', 'kelas','komputer',]
}
console.log(kampus)
console.log('====')
let FMIPAUI = {
    jurusan : 10,
    departemen : 6,
    lokasi : 'depok',
    namaKantin : 'dallas',
    adaHutan : true,
    FMIPA : ['gedung dekan', 'kantin','dosen',] 
}
console.log(FMIPAUI);
console.log('====');

const hargaKantin = {
    namaMakanan1 : 'Ayam kalasan',
    harga1 : 17000,
    namaMakanan2 : 'indomie Dobel',
    harga2 : 16000,
    namaMakanan3 : 'mie Yamin',
    harga3 : 13000,
    
    totalHargaMakanan : function (totalharga) {
        console.log('mau bayar bang', totalharga);
        return totalharga;
    },
};
console.log(hargaKantin);