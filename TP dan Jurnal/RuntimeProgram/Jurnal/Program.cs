using System;

class Program
{
    static void Main()
    {
        var config = BankTransferConfig.LoadConfig("bank_transfer_config.json");

        string lang = config.lang;
        Console.WriteLine(lang == "id" ? "Masukkan jumlah uang yang akan di-transfer:" : "Please insert the amount of money to transfer:");
        string? inputAmount = Console.ReadLine();
        if (!int.TryParse(inputAmount, out int amount))
        {
            Console.WriteLine("Invalid input.");
            return;
        }

        if (amount < 0)
        {
            Console.WriteLine("Invalid input.");
            return;
        }
        if (amount == 0)
        {
            Console.WriteLine("Invalid input.");
            return;
        }
        int fee = amount <= config.transfer.threshold ? config.transfer.low_fee : config.transfer.high_fee;
        int total = amount + fee;

        if (lang == "id")
        {
            Console.WriteLine($"Biaya transfer = {fee}");
            Console.WriteLine($"Total biaya = {total}");
        }
        else
        {
            Console.WriteLine($"Transfer fee = {fee}");
            Console.WriteLine($"Total amount = {total}");
        }

        Console.WriteLine(lang == "id" ? "Pilih metode transfer:" : "Select transfer method:");
        for (int i = 0; i < config.methods.Count; i++)
        {
            Console.WriteLine($"{i + 1}. {config.methods[i]}");
        }
        Console.ReadLine(); // Pilihan user tidak digunakan dalam logika

        string confirmText = lang == "id" ? config.confirmation.id : config.confirmation.en;
        Console.WriteLine(lang == "id" ? $"Ketik \"{confirmText}\" untuk mengkonfirmasi transaksi:" : $"Please type \"{confirmText}\" to confirm the transaction:");
        string? input = Console.ReadLine();
        if (input == null)
        {
            Console.WriteLine(lang == "id" ? "Input tidak valid." : "Invalid input.");
            return;
        }

        if (input.ToLower() == confirmText.ToLower())
        {
            Console.WriteLine(lang == "id" ? "Proses transfer berhasil" : "The transfer is completed");
        }
        else
        {
            Console.WriteLine(lang == "id" ? "Transfer dibatalkan" : "Transfer is cancelled");
        }

    }
}