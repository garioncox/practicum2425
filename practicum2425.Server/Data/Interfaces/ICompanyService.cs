using practicum2425.Server.Data;

namespace practicum2425.Server.Data.Interfaces
{
    public interface ICompanyService
    {
        public Task<List<Company>> GetCompanyListAsync();

    }
}
