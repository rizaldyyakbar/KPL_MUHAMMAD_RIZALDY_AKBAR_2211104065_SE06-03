class KodePos {
    constructor() {
        // Peta kelurahan dan kode pos
        this.kodePosMap = {
            "Batumunggal": "40266",
            "Kujangsari": "40287",
            "Mengger": "40267",
            "Wates": "40256",
            "Cijaura": "40287",
            "Jatisari": "40286",
            "Margasari": "40286",
            "Sekejati": "40286",
            "Kebonwaru": "40272",
            "Maleer": "40274",
            "Samoja": "40273"
        };
    }

    // Mendapatkan kode pos berdasarkan kelurahan
    getKodePos(kelurahan) {
        if (typeof kelurahan !== 'string' || kelurahan.trim() === '') {
            return "Kelurahan harus berupa string yang valid.";
        }
        
        // Kembalikan kode pos atau pesan error jika kelurahan tidak ditemukan
        return this.kodePosMap[kelurahan] || "Kode pos tidak ditemukan untuk kelurahan " + kelurahan;
    }

    // Menambahkan kode pos untuk kelurahan baru
    addKodePos(kelurahan, kodePos) {
        if (this.kodePosMap[kelurahan]) {
            return `Kelurahan ${kelurahan} sudah memiliki kode pos.`;
        }
        this.kodePosMap[kelurahan] = kodePos;
        return `Kode pos untuk kelurahan ${kelurahan} berhasil ditambahkan.`;
    }
}

// Contoh penggunaan
const kodePos = new KodePos();

console.log(kodePos.getKodePos("Batumunggal"));  // Output: 40266
console.log(kodePos.getKodePos("Kujangsari"));  // Output: 40287
console.log(kodePos.getKodePos("Samoja"));      // Output: 40273
console.log(kodePos.getKodePos("Banyumas"));    // Output: Kode pos tidak ditemukan untuk kelurahan Banyumas

// Menambahkan kode pos baru
console.log(kodePos.addKodePos("Banyumas", "40288"));  // Output: Kode pos untuk kelurahan Banyumas berhasil ditambahkan.
console.log(kodePos.getKodePos("Banyumas"));           // Output: 40288
