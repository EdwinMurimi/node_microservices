CREATE PROCEDURE [dbo].[projectDelete]
(
    @project_id varchar(40)
)
AS
BEGIN
    SET NOCOUNT ON;
    DECLARE @deleted BIT;

    SELECT @deleted = is_deleted FROM [dbo].[projects] WHERE _id = @project_id;

    IF @deleted = 0
        BEGIN
            UPDATE dbo.projects
            SET is_deleted = 1
            WHERE
                _id = @project_id;
        END
END;
GO