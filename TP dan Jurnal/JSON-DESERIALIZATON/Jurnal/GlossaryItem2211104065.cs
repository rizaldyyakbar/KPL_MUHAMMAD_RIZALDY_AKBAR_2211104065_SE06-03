using System;
using System.IO;
using System.Text.Json;

public class GlossaryItem2211104065
{
    public GlossaryData Glossary { get; set; }

    public class GlossaryData
    {
        public GlossEntry GlossEntry { get; set; }
    }

    public class GlossEntry
    {
        public string ID { get; set; }
        public string SortAs { get; set; }
        public string GlossTerm { get; set; }
        public string Acronym { get; set; }
        public string Abbrev { get; set; }
        public string Definition { get; set; }
        public string[] SeeAlso { get; set; }
    }

    public static void ReadJSON()
    {
        string filePath = "jurnal7_3_2211104065.json";
        string json = File.ReadAllText(filePath);
        var data = JsonSerializer.Deserialize<GlossaryItem2211104065>(json);

        var entry = data?.Glossary.GlossEntry;
        Console.WriteLine("GlossEntry:");
        Console.WriteLine($"ID: {entry?.ID}");
        Console.WriteLine($"Term: {entry?.GlossTerm}");
        Console.WriteLine($"Acronym: {entry?.Acronym}");
        Console.WriteLine($"Abbrev: {entry?.Abbrev}");
        Console.WriteLine($"Definition: {entry?.Definition}");
        Console.WriteLine($"See Also: {string.Join(", ", entry.SeeAlso)}");
    }
}
