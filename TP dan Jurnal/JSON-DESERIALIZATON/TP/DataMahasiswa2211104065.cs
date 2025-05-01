using System;
using System.IO;
using System.Text.Json;

public class DataMahasiswa2211104065
{
    public string? nama { get; set; }
    public string? nim { get; set; }
    public string? fakultas { get; set; }

    public static void ReadJSON()
    {
        string path = "tp7_1_2211104065.json";
        string jsonString = File.ReadAllText(path);
        var data = JsonSerializer.Deserialize<DataMahasiswa2211104065>(jsonString);
        if (data != null)
        {
            Console.WriteLine($"Nama {data.nama} dengan nim {data.nim} dari fakultas {data.fakultas}");
        }
        else
        {
            Console.WriteLine("Gagal membaca data mahasiswa dari file JSON.");
        }

    }
}