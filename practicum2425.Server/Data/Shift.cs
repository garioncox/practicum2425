using System;
using System.Collections.Generic;

namespace practicum2425.Server.Data;

public partial class Shift
{
    public int Id { get; set; }

    public string? StartTime { get; set; }

    public string? EndTime { get; set; }

    public string? Description { get; set; }

    public string? Location { get; set; }

    public int? RequestedEmployees { get; set; }

    public string? Status { get; set; }

    public virtual ICollection<EmployeeShift> EmployeeShifts { get; set; } = new List<EmployeeShift>();

    public virtual ICollection<ProjectShift> ProjectShifts { get; set; } = new List<ProjectShift>();
}
