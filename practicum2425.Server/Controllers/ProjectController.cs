using Microsoft.AspNetCore.Mvc;
using practicum2425.Server.Data;
using practicum2425.Server.DTOs;
using practicum2425.Server.Interfaces;
using practicum2425.Server.Services;

[ApiController]
[Route("api/[controller]")]
public class ProjectController : ControllerBase
{
    private readonly IProjectService _projectService;
    public ProjectController(IProjectService service)
    {
        _projectService = service;
    }

    [HttpGet("GetProjects")]
    public async Task<List<Project>> GetProjectListAsync()
    {
        return await _projectService.GetProjectListAsync();
    }

    [HttpPost()]
    public async Task CreateProject( [FromBody] ProjectDTO projectDTO)
    {

        Project project = new Project()
        {
           EndDate = projectDTO.EndDate,
           StartDate = projectDTO.StartDate,
           Location = projectDTO.Location,
           Name = projectDTO.Name,
           Status = Shift.STATUS_ACTIVE
        };

        await _projectService.CreateProject(project);
    }
}