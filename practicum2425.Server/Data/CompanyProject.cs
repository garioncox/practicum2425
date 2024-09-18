﻿using System;
using System.Collections.Generic;

namespace practicum2425.Server.Data;

public partial class CompanyProject
{
    public int Id { get; set; }

    public int CompanyId { get; set; }

    public int ProjectId { get; set; }

    public virtual Company Company { get; set; } = null!;

    public virtual Project Project { get; set; } = null!;
}
