class Penjumlahan {
    jumlahTigaAngka(a, b, c) {
        return a + b + c;
    }
}

const penjumlahan = new Penjumlahan();
const hasil = penjumlahan.jumlahTigaAngka(21, 11, 65);
console.log(`Hasil Penjumlahan: ${hasil}`);