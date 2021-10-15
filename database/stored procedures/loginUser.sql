CREATE PROCEDURE [dbo].[LoginUser]
(
	@email_address varchar(50)
)
AS 

SET NOCOUNT ON;

BEGIN
	SELECT _id,
			   first_name,
			   last_name,
			   email,
			   password
	FROM	[dbo].[users] WHERE email = @email_address AND is_deleted = 0
  FOR JSON AUTO;
END;