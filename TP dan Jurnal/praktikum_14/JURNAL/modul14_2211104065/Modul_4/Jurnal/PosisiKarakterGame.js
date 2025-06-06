class PosisiKarakterGame {
    constructor() {
        this.state = "Berdiri";
        this.nim = 2211104065;
    }

    ubahState(stateBaru) {
        console.log(`State berubah: ${this.state} → ${stateBaru}`);
        this.state = stateBaru;
    }

    tekanTombolS() {
        if (this.nim % 3 === 0) console.log("Tombol arah bawah ditekan.");

        if (this.state === "Berdiri") this.ubahState("Jongkok");
        else if (this.state === "Jongkok") this.ubahState("Tengkurap");
    }

    tekanTombolW() {
        if (this.nim % 3 === 0) console.log("Tombol arah atas ditekan.");

        if (this.state === "Jongkok") this.ubahState("Berdiri");
        else if (this.state === "Berdiri") this.ubahState("Terbang");
    }

    tekanTombolX() {
        if (this.state === "Tengkurap") {
            this.ubahState("Jongkok");
        }
    }
}

// **Simulasi Program**
const karakter = new PosisiKarakterGame();
console.log(`State awal: ${karakter.state}`);

karakter.tekanTombolS(); // Berdiri → Jongkok
karakter.tekanTombolW(); // Jongkok → Berdiri
karakter.tekanTombolS(); // Berdiri → Jongkok
karakter.tekanTombolS(); // Jongkok → Tengkurap
karakter.tekanTombolX(); // Tengkurap → Jongkok
karakter.tekanTombolW(); // Jongkok → Berdiri
karakter.tekanTombolW(); // Berdiri → Terbang
karakter.tekanTombolS(); // Terbang → Jongkok (jika memungkinkan)
