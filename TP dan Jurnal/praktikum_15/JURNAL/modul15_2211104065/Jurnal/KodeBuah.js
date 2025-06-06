class KodeBuah {
    constructor() {
        this.kodeBuah = {
            "Apel": "A00",
            "Aprikot": "B00",
            "Alpukat": "C00",
            "Pisang": "D00",
            "Paprika": "E00",
            "Blackberry": "F00",
            "Ceri": "H00",
            "Kelapa": "I00",
            "Jagung": "J00",
            "Kurma": "K00",
            "Durian": "L00",
            "Anggur": "M00",
            "Melon": "N00",
            "Semangka": "O00"
        };
    }

    getKodeBuah(namaBuah) {
        return this.kodeBuah[namaBuah] || "Kode buah tidak ditemukan";
    }
}

// Contoh penggunaan
const kodeBuah = new KodeBuah();
console.log(kodeBuah.getKodeBuah("Apel")); 
console.log(kodeBuah.getKodeBuah("Durian")); 
console.log(kodeBuah.getKodeBuah("Pisang"));
console.log(kodeBuah.getKodeBuah("strawberry"));