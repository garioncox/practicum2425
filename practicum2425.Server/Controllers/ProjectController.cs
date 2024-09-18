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
    public async Task PostProject( [FromBody] ProjectDTO project)
    {

        Project newProject = new Project()
        {
           EndDate = project.endDate,
           StartDate = project.startDate,
           Location = project.location,
           Name = project.name,
           Status = Shift.STATUS_ACTIVE
        };

        Console.WriteLine(project.name + ":name");
        Console.WriteLine(project.startDate + ":sdate");
        Console.WriteLine(project.endDate + ":edate");
        Console.WriteLine(project.location + ":location");


        await _projectService.PostProject(newProject);
    }
}