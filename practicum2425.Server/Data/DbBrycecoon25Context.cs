using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace practicum2425.Server.Data;

public partial class DbBrycecoon25Context : DbContext
{
    public DbBrycecoon25Context()
    {
    }

    public DbBrycecoon25Context(DbContextOptions<DbBrycecoon25Context> options)
        : base(options)
    {
    }

    public virtual DbSet<Company> Companies { get; set; }

    public virtual DbSet<CompanyProject> CompanyProjects { get; set; }

    public virtual DbSet<Employee> Employees { get; set; }

    public virtual DbSet<EmployeeShift> EmployeeShifts { get; set; }

    public virtual DbSet<Project> Projects { get; set; }

    public virtual DbSet<ProjectShift> ProjectShifts { get; set; }

    public virtual DbSet<Shift> Shifts { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseNpgsql("Name=db");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasPostgresEnum("Practicum2025", "status", new[] { "ACTIVE", "ARCHIVED", "COMPLETED" });

        modelBuilder.Entity<Company>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("company_pkey");

            entity.ToTable("company", "Practicum2025");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .HasColumnName("name");
        });

        modelBuilder.Entity<CompanyProject>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("company_project_pkey");

            entity.ToTable("company_project", "Practicum2025");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CompanyId).HasColumnName("company_id");
            entity.Property(e => e.ProjectId).HasColumnName("project_id");

            entity.HasOne(d => d.Company).WithMany(p => p.CompanyProjects)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("company_project_company_id_fkey");

            entity.HasOne(d => d.Project).WithMany(p => p.CompanyProjects)
                .HasForeignKey(d => d.ProjectId)
                .HasConstraintName("company_project_project_id_fkey");
        });

        modelBuilder.Entity<Employee>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("employee_pkey");

            entity.ToTable("employee", "Practicum2025");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .HasColumnName("name");
            entity.Property(e => e.PayRate).HasColumnName("pay_rate");
        });

        modelBuilder.Entity<EmployeeShift>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("employee_shift_pkey");

            entity.ToTable("employee_shift", "Practicum2025");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.EmpId).HasColumnName("emp_id");
            entity.Property(e => e.EndTime)
                .HasMaxLength(20)
                .HasColumnName("end_time");
            entity.Property(e => e.ShiftId).HasColumnName("shift_id");
            entity.Property(e => e.StartTime)
                .HasMaxLength(20)
                .HasColumnName("start_time");

            entity.HasOne(d => d.Emp).WithMany(p => p.EmployeeShifts)
                .HasForeignKey(d => d.EmpId)
                .HasConstraintName("employee_shift_emp_id_fkey");

            entity.HasOne(d => d.Shift).WithMany(p => p.EmployeeShifts)
                .HasForeignKey(d => d.ShiftId)
                .HasConstraintName("employee_shift_shift_id_fkey");
        });

        modelBuilder.Entity<Project>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("project_pkey");

            entity.ToTable("project", "Practicum2025");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.EndDate)
                .HasMaxLength(20)
                .HasColumnName("end_date");
            entity.Property(e => e.Location)
                .HasMaxLength(50)
                .HasColumnName("location");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .HasColumnName("name");
            entity.Property(e => e.StartDate)
                .HasMaxLength(20)
                .HasColumnName("start_date");
            entity.Property(e => e.Status)
                .HasMaxLength(16)
                .HasColumnName("status");
        });

        modelBuilder.Entity<ProjectShift>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("project_shift_pkey");

            entity.ToTable("project_shift", "Practicum2025");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.ProjectId).HasColumnName("project_id");
            entity.Property(e => e.ShiftId).HasColumnName("shift_id");

            entity.HasOne(d => d.Project).WithMany(p => p.ProjectShifts)
                .HasForeignKey(d => d.ProjectId)
                .HasConstraintName("project_shift_project_id_fkey");

            entity.HasOne(d => d.Shift).WithMany(p => p.ProjectShifts)
                .HasForeignKey(d => d.ShiftId)
                .HasConstraintName("project_shift_shift_id_fkey");
        });

        modelBuilder.Entity<Shift>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("shift_pkey");

            entity.ToTable("shift", "Practicum2025");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Description)
                .HasMaxLength(200)
                .HasColumnName("description");
            entity.Property(e => e.EndTime)
                .HasMaxLength(20)
                .HasColumnName("end_time");
            entity.Property(e => e.Location)
                .HasMaxLength(50)
                .HasColumnName("location");
            entity.Property(e => e.RequestedEmployees).HasColumnName("requested_employees");
            entity.Property(e => e.StartTime)
                .HasMaxLength(20)
                .HasColumnName("start_time");
            entity.Property(e => e.Status)
                .HasMaxLength(16)
                .HasColumnName("status");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
