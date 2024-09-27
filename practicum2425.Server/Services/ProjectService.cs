using Microsoft.EntityFrameworkCore;
using practicum2425.Server.Data;
using practicum2425.Server.Interfaces;

namespace practicum2425.Server.Services;


public class ProjectService : IProjectService
{
    readonly PostgresContext _context;
    public ProjectService(PostgresContext context)
    {
        _context = context;
    }

    public async Task<List<Project>> GetProjectListAsync()
    {
        return await _context.Projects.ToListAsync();
    }

    public async Task CreateProject(Project project)
    {
        _context.Projects.Add(project);
        await _context.SaveChangesAsync();
    }

    public Task DeleteProjectAsync(int id)
    {
        Project? project = _context.Projects.FirstOrDefault(p => p.Id == id);
        if (project != null)
        {
            _context.Projects.Remove(project);
        }
        return _context.SaveChangesAsync();
    }

    public async Task EditProjectAsync(Project project)
    {
        _context.Projects.Update(project);
        await _context.SaveChangesAsync();
    }
}

