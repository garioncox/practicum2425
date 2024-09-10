using System;
using System.Collections.Generic;

namespace practicum2425.Server.Data;

public partial class Company
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<CompanyProject> CompanyProjects { get; set; } = new List<CompanyProject>();
}
