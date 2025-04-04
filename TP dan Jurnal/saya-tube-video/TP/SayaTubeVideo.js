class SayaTubeVideo {
    constructor(title) {
        if (title == null || title.length > 100) {
            throw new Error("Judul tidak boleh null dan maksimal 100 karakter.");
        }
        this.id = Math.floor(10000 + Math.random() * 90000); // random 5 digit
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        try {
            if (count > 10000000) throw new Error("Penambahan playCount maksimal 10.000.000");

            const maxInt = Number.MAX_SAFE_INTEGER;
            if (this.playCount + count > maxInt) {
                throw new Error("Overflow playCount");
            }

            this.playCount += count;
        } catch (e) {
            console.error("Terjadi kesalahan:", e.message);
        }
    }

    printVideoDetails() {
        console.log(`ID Video: ${this.id}`);
        console.log(`Judul Video: ${this.title}`);
        console.log(`Jumlah Play Count: ${this.playCount}`);
    }
}

module.exports = SayaTubeVideo;