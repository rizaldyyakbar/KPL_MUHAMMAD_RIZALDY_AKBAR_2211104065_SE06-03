using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("=== Deserialisasi Data Mahasiswa ===");
        DataMahasiswa2211104065.ReadJSON();
        Console.WriteLine();

        Console.WriteLine("=== Deserialisasi Daftar Anggota Kelompok ===");
        TeamMembers2211104065.ReadJSON();
        Console.WriteLine();

        Console.WriteLine("=== Deserialisasi Glossary Entry ===");
        GlossaryItem2211104065.ReadJSON();
        Console.WriteLine();
    }
}
