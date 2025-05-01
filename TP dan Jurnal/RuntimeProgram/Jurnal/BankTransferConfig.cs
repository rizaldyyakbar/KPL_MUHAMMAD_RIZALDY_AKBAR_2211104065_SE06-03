using System;
using System.IO;
using System.Text.Json;
using System.Collections.Generic;

public class BankTransferConfig
{
    public string lang { get; set; } = "en";
    public Transfer transfer { get; set; } = new Transfer();
    public List<string> methods { get; set; } = new List<string>();
    public Confirmation confirmation { get; set; } = new Confirmation();

    public static BankTransferConfig LoadConfig(string path)
    {
        if (File.Exists(path))
        {
            string json = File.ReadAllText(path);
            BankTransferConfig? config = JsonSerializer.Deserialize<BankTransferConfig>(json);
            if (config != null) return config;
        }

        // Nilai default jika file tidak ada atau gagal deserialize
        return new BankTransferConfig
        {
            lang = "en",
            transfer = new Transfer
            {
                threshold = 25000000,
                low_fee = 6500,
                high_fee = 15000
            },
            methods = new List<string> { "RTO (real-time)", "SKN", "RTGS", "BI FAST" },
            confirmation = new Confirmation
            {
                en = "yes",
                id = "ya"
            }
        };
    }
}

public class Transfer
{
    public int threshold { get; set; }
    public int low_fee { get; set; }
    public int high_fee { get; set; }
}

public class Confirmation
{
    public string en { get; set; } = "yes";
    public string id { get; set; } = "ya";
}
