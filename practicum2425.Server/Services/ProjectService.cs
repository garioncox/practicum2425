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

    public async Task PostProject(Project project)
    {
        _context.Projects.Add(project);
        await _context.SaveChangesAsync();
    }
}

