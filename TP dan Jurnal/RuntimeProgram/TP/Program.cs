using System;

class Program
{
    static void Main(string[] args)
    {
        try
        {
            CovidConfig config = new CovidConfig();

            // Menampilkan pilihan satuan suhu
            Console.WriteLine("\nPilih satuan suhu:");
            Console.WriteLine("1. Celcius");
            Console.WriteLine("2. Fahrenheit");
            Console.Write("Masukkan pilihan (1/2): ");

            if (!int.TryParse(Console.ReadLine(), out int pilihan))
            {
                Console.WriteLine("Input tidak valid, menggunakan celcius sebagai default.");
                pilihan = 1;
            }

            // Mengubah satuan suhu berdasarkan pilihan pengguna
            if (pilihan == 1)
            {
                config.satuan_suhu = "celcius";
            }
            else if (pilihan == 2)
            {
                config.satuan_suhu = "fahrenheit";
            }
            else
            {
                Console.WriteLine("Pilihan tidak valid, menggunakan celcius sebagai default.");
                config.satuan_suhu = "celcius";
            }

            // Hanya simpan konfigurasi jika satuan berubah
            if (pilihan == 1 && config.satuan_suhu != "celcius" ||
                pilihan == 2 && config.satuan_suhu != "fahrenheit")
            {
                config.SaveConfig();
            }

            // Meminta input suhu dari pengguna
            Console.Write($"\nBerapa suhu badan anda saat ini? Dalam nilai {config.satuan_suhu}: ");
            if (!double.TryParse(Console.ReadLine(), out double suhu))
            {
                Console.WriteLine("Input suhu tidak valid. Program tidak dapat melanjutkan.");
                return;
            }

            Console.Write("Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala demam? ");
            if (!int.TryParse(Console.ReadLine(), out int hari))
            {
                Console.WriteLine("Input hari tidak valid. Program tidak dapat melanjutkan.");
                return;
            }

            bool suhuNormal = false;

            if (config.satuan_suhu == "celcius")
            {
                suhuNormal = suhu >= 36.5 && suhu <= 37.5;
                Console.WriteLine($"Suhu anda: {suhu}°C");
            }
            else if (config.satuan_suhu == "fahrenheit")
            {
                suhuNormal = suhu >= 97.7 && suhu <= 99.5;
                Console.WriteLine($"Suhu anda: {suhu}°F");
            }

            Console.WriteLine($"Hari sejak demam terakhir: {hari}");

            // Fix: Pastikan ini sesuai dengan aturan yang diinginkan
            // Jika hari terakhir demam >= batas_hari_deman, berarti sudah cukup lama tidak demam
            bool hariValid = hari >= config.batas_hari_deman;

            if (suhuNormal && hariValid)
            {
                Console.WriteLine("\n" + config.pesan_diterima);
            }
            else
            {
                Console.WriteLine("\n" + config.pesan_ditolak);
                if (!suhuNormal)
                {
                    Console.WriteLine("Alasan: Suhu tubuh tidak normal.");
                }
                if (!hariValid)
                {
                    Console.WriteLine($"Alasan: Anda harus sudah tidak demam selama minimal {config.batas_hari_deman} hari.");
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Terjadi kesalahan: {ex.Message}");
        }

        Console.WriteLine("\nTekan Enter untuk keluar...");
        Console.ReadLine();
    }
}