const SayaTubeUser = require('./SayaTubeUser');
const SayaTubeVideo = require('./SayaTubeVideo');

const user = new SayaTubeUser("Rijal");

const judulFilm = [
    "Review Film Interstellar oleh Rijal",
    "Review Film Inception oleh Rijal",
    "Review Film The Dark Knight oleh Rijal",
    "Review Film Fight Club oleh Rijal",
    "Review Film Parasite oleh Rijal",
    "Review Film Everything Everywhere All At Once oleh Rijal",
    "Review Film Joker oleh Rijal",
    "Review Film Oppenheimer oleh Rijal",
    "Review Film Whiplash oleh Rijal",
    "Review Film The Matrix oleh Rijal"
];

// Tambahkan video dan simulasi play count
judulFilm.forEach(judul => {
    const video = new SayaTubeVideo(judul);
    video.increasePlayCount(20000000); // valid
    user.addVideo(video);
});

// Print
user.printAllVideoPlaycount();
console.log("Total play count:", user.getTotalVideoPlayCount());
