// Target Interface: Mendefinisikan antarmuka yang diharapkan oleh client
class EnglishSpeaker {
    // Metode yang diharapkan untuk berbicara dalam bahasa Inggris
    speak(message) {
        return message;
    }
}

// Adaptee: Kelas yang perlu diadaptasi (pembicara bahasa Indonesia)
class IndonesianSpeaker {
    // Metode untuk berbicara dalam bahasa Indonesia
    berbicaraDalamIndonesia(pesan) {
        return pesan;
    }
}

// Adapter: Menghubungkan Adaptee dengan Target Interface
class IndonesianToEnglishTranslator extends EnglishSpeaker {
    constructor(indonesianSpeaker) {
        super();
        this.indonesianSpeaker = indonesianSpeaker;
    }

    // Implementasi metode speak dari EnglishSpeaker
    speak(message) {
        const indonesianMessage = this.translateToIndonesian(message);
        const spokenInIndonesian = this.indonesianSpeaker.berbicaraDalamIndonesia(indonesianMessage);
        return this.translateToEnglish(spokenInIndonesian);
    }

    // Metode bantu: terjemahkan dari Inggris ke Indonesia
    translateToIndonesian(englishMessage) {
        const translations = {
            "Hello": "Halo",
            "How are you?": "Apa kabar?",
            "Thank you": "Terima kasih"
        };
        return translations[englishMessage] || englishMessage;
    }

    // Metode bantu: terjemahkan dari Indonesia ke Inggris
    translateToEnglish(indonesianMessage) {
        const translations = {
            "Halo": "Hello",
            "Apa kabar?": "How are you?",
            "Terima kasih": "Thank you"
        };
        return translations[indonesianMessage] || indonesianMessage;
    }
}

// Client Code: Simulasi penggunaan Adapter
console.log("Pertemuan Internasional dimulai:");

// Membuat instance dari Adaptee
const indonesianDelegate = new IndonesianSpeaker();
// Membuat instance dari Adapter
const translator = new IndonesianToEnglishTranslator(indonesianDelegate);

// Daftar pesan dalam bahasa Inggris
const englishMessages = ["Hello", "How are you?", "Thank you"];

// Iterasi setiap pesan dan demonstrasikan proses terjemahan
englishMessages.forEach(message => {
    console.log(`\nPeserta berbahasa Inggris mengatakan: "${message}"`);
    
    const translatedToIndonesian = translator.translateToIndonesian(message);
    console.log(`Penerjemah menyampaikan ke delegasi Indonesia: "${translatedToIndonesian}"`);
    
    const responseInIndonesian = indonesianDelegate.berbicaraDalamIndonesia(translatedToIndonesian);
    console.log(`Delegasi Indonesia merespon dalam bahasa Indonesia: "${responseInIndonesian}"`);
    
    const translatedBackToEnglish = translator.translateToEnglish(responseInIndonesian);
    console.log(`Penerjemah menerjemahkan kembali ke bahasa Inggris: "${translatedBackToEnglish}"`);
});

console.log("\nPertemuan Internasional selesai.");
