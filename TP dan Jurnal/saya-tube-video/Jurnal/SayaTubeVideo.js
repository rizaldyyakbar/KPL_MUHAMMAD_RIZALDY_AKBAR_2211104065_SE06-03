class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 200) {
            throw new Error("Judul tidak boleh null dan maksimal 200 karakter.");
        }

        this.id = Math.floor(Math.random() * 90000) + 10000;
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        try {
            if (typeof count !== 'number' || count < 0 || count > 25000000) {
                throw new Error("Play count harus antara 0 dan 25.000.000");
            }

            const maxInt = Number.MAX_SAFE_INTEGER;
            if (this.playCount + count > maxInt) {
                throw new Error("Overflow playCount");
            }

            this.playCount += count;
        } catch (err) {
            console.error(`Error: ${err.message}`);
        }
    }

    printVideoDetails() {
        console.log(`ID: ${this.id}`);
        console.log(`Judul: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

module.exports = SayaTubeVideo;