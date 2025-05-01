using System;
using System.IO;
using System.Text.Json;

public class DataMahasiswa2211104065
{
    public string? Nama { get; set; }
    public string? NIM { get; set; }
    public string? Fakultas { get; set; }

    public static void ReadJSON()
    {
        string filePath = "jurnal7_1_2211104065.json";
        string json = File.ReadAllText(filePath);
        var data = JsonSerializer.Deserialize<DataMahasiswa2211104065>(json);
        Console.WriteLine($"Nama: {data?.Nama}\nNIM: {data?.NIM}\nFakultas: {data?.Fakultas}");
    }
}