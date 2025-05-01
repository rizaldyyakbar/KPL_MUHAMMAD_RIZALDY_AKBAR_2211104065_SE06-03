using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("=== JSON Deserialization 1 ===");
        DataMahasiswa2211104065.ReadJSON();

        Console.WriteLine("\n=== JSON Deserialization 2 ===");
        KuliahMahasiswa2211104065.ReadJSON();
    }
}