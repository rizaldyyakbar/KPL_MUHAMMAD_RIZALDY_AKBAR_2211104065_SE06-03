using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

public class TeamMember
{
    public string? NIM { get; set; }
    public string? Firstname { get; set; }
    public string? Lastname { get; set; }
    public int Age { get; set; }
    public string? Gender { get; set; }
}

public class TeamMembers2211104065
{
    public List<TeamMember>? Members { get; set; }

    public static void ReadJSON()
    {
        string filePath = "jurnal7_2_2211104065.json";
        string json = File.ReadAllText(filePath);
        var data = JsonSerializer.Deserialize<TeamMembers2211104065>(json);

        Console.WriteLine("Team member list:");
        foreach (var member in data.Members)
        {
            Console.WriteLine($"{member.NIM} {member.Firstname} {member.Lastname} ({member.Age} {member.Gender})");
        }
    }
}