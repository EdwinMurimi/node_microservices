CREATE PROCEDURE [dbo].[getProjectTask]
 @project_id varchar(100),
 @task_id varchar(100)

AS

SET NOCOUNT ON;

BEGIN
	SELECT
      _id,
			task_name,
			project_id,
			task_start,
			task_end
	FROM	[dbo].[tasks] WHERE project_id = @project_id AND _id=@task_id;
END;