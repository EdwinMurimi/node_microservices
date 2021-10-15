CREATE PROCEDURE [dbo].[GetAUser]
	@user_Id	varchar(40)
AS

SET NOCOUNT ON;

BEGIN
	SELECT	
      _id,
			first_name,
			last_name,
			email,
			is_admin
	FROM	[dbo].[users] WHERE _id = @user_Id;
END;