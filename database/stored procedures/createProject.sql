CREATE OR ALTER PROCEDURE [dbo].[createNewProject]
	@id varchar(40),
	@project_name varchar(255),
  @project_start date,
  @project_end date
AS

SET NOCOUNT ON;

BEGIN
	INSERT INTO dbo.projects
	(_id, project_name, project_start, project_end)
	VALUES
	(@id, @project_name, @project_start, @project_end);
END;