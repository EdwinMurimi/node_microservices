CREATE PROCEDURE [dbo].[GetProjectTasks]
 @project_id varchar(100)
AS

SET NOCOUNT ON;

BEGIN
	SELECT
      _id,
			task_name,
			project_id,
			task_start,
			task_end
	FROM	[dbo].[tasks] WHERE project_id = @project_id;
end;