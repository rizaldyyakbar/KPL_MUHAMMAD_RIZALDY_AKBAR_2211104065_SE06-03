const SayaTubeVideo = require('./SayaTubeVideo');

class SayaTubeUser {
    constructor(username) {
        if (!username || username.length > 100) {
            throw new Error("Username tidak boleh null dan maksimal 100 karakter.");
        }

        this.username = username;
        this.uploadedVideos = [];
    }

    addVideo(video) {
        try {
            if (!video) throw new Error("Video tidak boleh null.");
            if (video.playCount >= Number.MAX_SAFE_INTEGER) {
                throw new Error("PlayCount video sudah maksimum.");
            }

            this.uploadedVideos.push(video);
        } catch (err) {
            console.error(`Error: ${err.message}`);
        }
    }

    getTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    printAllVideoPlaycount() {
        console.log(`User: ${this.username}`);
        const limit = Math.min(this.uploadedVideos.length, 8);

        for (let i = 0; i < limit; i++) {
            console.log(`Video ${i + 1} judul: ${this.uploadedVideos[i].title}`);
        }
    }
}

module.exports = SayaTubeUser;