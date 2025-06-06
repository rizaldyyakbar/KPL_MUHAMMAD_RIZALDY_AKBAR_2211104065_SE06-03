// Singleton Pattern: ConfigManager untuk mengelola konfigurasi aplikasi
class ConfigManager {
    constructor() {
        if (ConfigManager.instance) {
            return ConfigManager.instance; // Kembalikan instance yang sudah ada
        }

        this._config = {}; // Objek untuk menyimpan konfigurasi
        ConfigManager.instance = this; // Simpan instance tunggal
        console.log('ConfigManager: Instance baru telah dibuat.');
    }

    // Atur nilai konfigurasi
    setConfig(key, value) {
        this._config[key] = value;
        console.log(`ConfigManager: Mengatur ${key} = ${value}`);
    }

    // Ambil nilai konfigurasi
    getConfig(key) {
        return this._config[key];
    }

    // Tampilkan seluruh konfigurasi
    displayConfig() {
        console.log('ConfigManager: Konfigurasi saat ini:');
        for (let key in this._config) {
            console.log(`  ${key}: ${this._config[key]}`);
        }
    }
}

// Penggunaan ConfigManager

console.log('Membuat instance pertama dari ConfigManager:');
const config1 = new ConfigManager();
config1.setConfig('theme', 'dark');
config1.setConfig('language', 'id');

console.log('\nMembuat instance kedua dari ConfigManager:');
const config2 = new ConfigManager();
config2.setConfig('fontSize', '14px');

console.log('\nKonfigurasi config1 sebelum perubahan melalui config2:');
config1.displayConfig();

console.log('\nMenambahkan backgroundColor melalui config2:');
config2.setConfig('backgroundColor', 'blue');

console.log('\nKonfigurasi config1 setelah perubahan melalui config2:');
config1.displayConfig();

console.log('\nMemeriksa apakah kedua instance adalah sama:');
console.log(config1 === config2 ? 'Sama instance' : 'Berbeda instance');

console.log('\nMengambil nilai konfigurasi tertentu:');
console.log('Theme:', config1.getConfig('theme'));
console.log('Language:', config2.getConfig('language')); // Harus tetap tersedia
