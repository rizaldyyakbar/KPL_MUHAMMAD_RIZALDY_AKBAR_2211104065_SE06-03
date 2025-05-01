using System.Text.Json;
using System.IO;
using System;

public class CovidConfig
{
    public string satuan_suhu { get; set; } = "celcius";
    public int batas_hari_deman { get; set; } = 14;
    public string pesan_ditolak { get; set; } = "Anda tidak diperbolehkan masuk ke dalam gedung ini";
    public string pesan_diterima { get; set; } = "Anda dipersilahkan untuk masuk ke dalam gedung ini";

    private const string configPath = "covid_config.json";

    public CovidConfig()
    {
        if (File.Exists(configPath))
        {
            try
            {
                string json = File.ReadAllText(configPath);
                // Hapus baris yang menampilkan isi JSON untuk mencegah output berulang

                // Tambahkan option untuk menangani case sensitivity
                var options = new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true,
                    WriteIndented = true
                };

                CovidConfig? config = JsonSerializer.Deserialize<CovidConfig>(json, options);
                if (config != null)
                {
                    satuan_suhu = config.satuan_suhu;
                    batas_hari_deman = config.batas_hari_deman;
                    pesan_ditolak = config.pesan_ditolak;
                    pesan_diterima = config.pesan_diterima;
                }
            }
            catch (JsonException ex)
            {
                Console.WriteLine($"Kesalahan Deserialisasi JSON: {ex.Message}");
                Console.WriteLine("Menggunakan konfigurasi default dan membuat file konfigurasi baru.");
                SaveConfig(); // Buat file dengan default jika deserialisasi gagal
            }
            catch (IOException ex)
            {
                Console.WriteLine($"Kesalahan Membaca File: {ex.Message}");
                Console.WriteLine("Menggunakan konfigurasi default.");
            }
        }
        else
        {
            // Hapus pesan yang tidak perlu
            SaveConfig(); // Buat file dengan default jika belum ada
        }
    }

    public void SaveConfig()
    {
        try
        {
            var options = new JsonSerializerOptions
            {
                WriteIndented = true
            };

            string json = JsonSerializer.Serialize(this, options);
            File.WriteAllText(configPath, json);
            // Hapus pesan ini untuk mengurangi output yang tidak perlu
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Kesalahan menyimpan konfigurasi: {ex.Message}");
        }
    }

    public void UbahSatuan()
    {
        satuan_suhu = satuan_suhu == "celcius" ? "fahrenheit" : "celcius";
        SaveConfig(); // Simpan perubahan satuan
    }
}