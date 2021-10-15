CREATE PROCEDURE [dbo].[GetProject]
 @project_id varchar(100)

AS

SET NOCOUNT ON;

BEGIN
	SELECT
      _id,
			project_name,
			project_start,
			project_end,
			is_complete
	FROM	[dbo].[projects] WHERE _id = @project_id AND is_deleted = 0;
END;