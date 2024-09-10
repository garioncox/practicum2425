using System;
using System.Collections.Generic;

namespace practicum2425.Server.Data;

public partial class EmployeeShift
{
    public int Id { get; set; }

    public string? StartTime { get; set; }

    public string? EndTime { get; set; }

    public int? EmpId { get; set; }

    public int? ShiftId { get; set; }

    public virtual Employee? Emp { get; set; }

    public virtual Shift? Shift { get; set; }
}
