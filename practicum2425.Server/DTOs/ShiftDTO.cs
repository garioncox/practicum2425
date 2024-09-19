namespace practicum2425.Server.DTOs
{
    public class ShiftDTO
    {

        public string StartTime { get; set; } = null!;

        public string EndTime { get; set; } = null!;

        public string? Description { get; set; }

        public string? Location { get; set; }

        public int RequestedEmployees { get; set; }

        public string Status { get; set; } = null!;
    }
}
