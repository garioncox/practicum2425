using Moq;
using practicum2425.Server.Controllers;
using practicum2425.Server.Data;
using practicum2425.Server.Interfaces;

namespace practicum2425.Tests.Services;

internal class EmployeeShiftServiceTests
{
    [SetUp]
    public void Setup()
    {
    }

    [Test]
    public async Task TestSigningUpForShift_ShouldNotAllowOverlappingShifts()
    {
        // ARRANGE
        List<Shift> shifts =
        [
            new Shift()
            {
                Id = 0,
                StartTime = DateTime.MinValue.ToString(),
                EndTime = DateTime.MinValue.AddHours(8).ToString(),
                RequestedEmployees = 10
            },
            new Shift()
            {
                Id = 1,
                StartTime = DateTime.MinValue.AddHours(4).ToString(),
                EndTime = DateTime.MinValue.AddHours(12).ToString(),
                RequestedEmployees = 10
            },
        ];

        List<Shift> empShifts =
        [
            shifts[1]
        ];

        EmployeeShift DTO = new()
        {
            EmpId = 1,
            ShiftId = 0
        };

        var shiftServiceMock = new Mock<IShiftService>();
        shiftServiceMock.Setup(m => m
            .GetShiftById(It.IsAny<int>()))
            .ReturnsAsync(shifts[0]);

        var empShiftServiceMock = new Mock<IEmployeeShiftService>();
        empShiftServiceMock.Setup(m => m
            .GetEmpShifts(It.IsAny<int>()))
            .Returns(empShifts);

        // ACT
        EmployeeShiftController empShiftController = new(empShiftServiceMock.Object, shiftServiceMock.Object);
        await empShiftController.CreateEmpShift(DTO);

        // ASSERT
        shiftServiceMock.Verify(m => m.GetShiftById(It.IsAny<int>()), Times.Once());
        empShiftServiceMock.Verify(m => m.GetEmpShifts(It.IsAny<int>()), Times.Once());
        empShiftServiceMock.Verify(m => m.CreateEmployeeShift(It.IsAny<EmployeeShift>()), Times.Never());
    }
}
