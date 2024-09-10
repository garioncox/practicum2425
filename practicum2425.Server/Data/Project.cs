using System;
using System.Collections.Generic;

namespace practicum2425.Server.Data;

public partial class Project
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Location { get; set; } = null!;

    public string? StartDate { get; set; }

    public string? EndDate { get; set; }

    public string? Status { get; set; }

    public virtual ICollection<CompanyProject> CompanyProjects { get; set; } = new List<CompanyProject>();

    public virtual ICollection<ProjectShift> ProjectShifts { get; set; } = new List<ProjectShift>();
}
