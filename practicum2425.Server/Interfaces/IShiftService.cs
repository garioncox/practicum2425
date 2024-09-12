﻿using practicum2425.Server.Data;

namespace practicum2425.Server.Interfaces;

public interface IShiftService
{
    public Task<List<Shift>> GetAllShifts();
}
