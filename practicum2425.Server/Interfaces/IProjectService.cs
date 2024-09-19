using practicum2425.Server.Data;

namespace practicum2425.Server.Interfaces;

public interface IProjectService
{
    public Task<List<Project>> GetProjectListAsync();
    public Task CreateProject(Project project);
}
