CREATE PROCEDURE [dbo].[RegisterUser]
	@id varchar(40),
	@firstname varchar(30),
	@lastname varchar(30),
	@email varchar(50),
	@password varchar(100)

AS

SET NOCOUNT ON;

BEGIN
	INSERT INTO dbo.users
	(_id, first_name, last_name, email, password)
	VALUES
	(@id, @firstname, @lastname, @email, @password);
END;