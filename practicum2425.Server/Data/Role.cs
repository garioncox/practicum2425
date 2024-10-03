using System;
using System.Collections.Generic;

namespace practicum2425.Server.Data;

public partial class Role
{
    public int Id { get; set; }

    public string? Rolename { get; set; }

    public virtual ICollection<Employee> Employees { get; set; } = new List<Employee>();
}
