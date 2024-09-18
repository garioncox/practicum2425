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
           EndDate = project.EndDate,
           StartDate = project.StartDate,
           Location = project.Location,
           Name = project.Name,
           Status = Shift.STATUS_ACTIVE
        };

        Console.WriteLine(project.Name + ":name");
        Console.WriteLine(project.StartDate + ":sdate");
        Console.WriteLine(project.EndDate + ":edate");
        Console.WriteLine(project.Location + ":location");


        await _projectService.PostProject(newProject);
    }
}