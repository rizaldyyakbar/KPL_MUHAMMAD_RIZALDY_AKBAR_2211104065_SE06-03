class Penjumlahan {
    jumlahTigaAngka(a, b, c) {
        return a + b + c;
    }
}

const penjumlahan = new Penjumlahan();
const hasil = penjumlahan.jumlahTigaAngka(12, 34, 56);
console.log(`Hasil Penjumlahan: ${hasil}`);