const SayaTubeVideo = require('./SayaTubeVideo');

const video = new SayaTubeVideo("Tutorial Design By Contract – [Rijal]");
video.increasePlayCount(5000000);
video.increasePlayCount(6000000); // akan error (melebihi batas)
video.printVideoDetails();

// Uji overflow dengan loop
const overflowTest = new SayaTubeVideo("Video Test Overflow");
for (let i = 0; i < 1000000; i++) {
    overflowTest.increasePlayCount(10000000); // akan cepat mencapai batas dan error
}
overflowTest.printVideoDetails();
