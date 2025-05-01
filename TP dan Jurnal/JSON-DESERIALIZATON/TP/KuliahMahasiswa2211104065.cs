using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

public class KuliahMahasiswa2211104065
{
    public List<MataKuliah>? mata_kuliah { get; set; }

    public class MataKuliah
    {
        public string? kode { get; set; }
        public string? nama { get; set; }
    }

    public static void ReadJSON()
    {
        string path = "tp7_2_2211104065.json";
        string jsonString = File.ReadAllText(path);
        var data = JsonSerializer.Deserialize<KuliahMahasiswa2211104065>(jsonString);

        if (data != null && data.mata_kuliah != null)
        {
            Console.WriteLine("Daftar mata kuliah yang diambil:");
            int i = 1;
            foreach (var mk in data.mata_kuliah)
            {
                Console.WriteLine($"MK {i} {mk.kode} - {mk.nama}");
                i++;
            }
        }
        else
        {
            Console.WriteLine("Gagal membaca data mata kuliah dari file JSON.");
        }
    }
}