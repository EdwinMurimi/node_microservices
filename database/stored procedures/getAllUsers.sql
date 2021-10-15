CREATE  PROCEDURE [dbo].[GetAllUsers]
AS

SET NOCOUNT ON;

BEGIN
	SELECT	
      _id,
			first_name,
			last_name,
			email,
			is_admin
	FROM	[dbo].[users];
END;