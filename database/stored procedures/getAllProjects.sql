CREATE PROCEDURE [dbo].[GetProjects]
AS

SET NOCOUNT ON;

BEGIN
	SELECT
      _id,
			project_name,
			project_start,
			project_end,
			is_complete
	FROM	[dbo].[projects] WHERE is_deleted = 0;
END;