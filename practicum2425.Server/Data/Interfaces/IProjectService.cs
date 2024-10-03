using practicum2425.Server.Data;

namespace practicum2425.Server.Data.Interfaces;

public interface IProjectService
{
    public Task<List<Project>> GetProjectListAsync();
    public Task CreateProject(Project project);
    public Task DeleteProjectAsync(int id);
    public Task EditProjectAsync(Project project);
}
