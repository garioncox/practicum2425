﻿namespace practicum2425.Server.Data;

public partial class Shift
{
    public int Id { get; set; }

    public string StartTime { get; set; } = null!;

    public string EndTime { get; set; } = null!;

    public string? Description { get; set; }

    public string? Location { get; set; }

    public int RequestedEmployees { get; set; }

    public string Status { get; set; } = null!;

    public virtual ICollection<EmployeeShift> EmployeeShifts { get; set; } = new List<EmployeeShift>();

    public virtual ICollection<ProjectShift> ProjectShifts { get; set; } = new List<ProjectShift>();

    public static string STATUS_ACTIVE = "ACTIVE";
    public static string STATUS_ARCHIVED = "ARCHIVED";
    public static string STATUS_COMPLETED = "COMPLETED";
}
