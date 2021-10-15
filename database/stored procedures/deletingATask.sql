ALTER PROCEDURE [dbo].[taskDelete]
(
    @project_id varchar(40),
    @task_id varchar(40)
)
AS
BEGIN
    SET NOCOUNT ON;
    DECLARE @deleted BIT;

    SELECT @deleted = is_deleted FROM [dbo].[tasks] WHERE project_id = @project_id AND _id = @task_id;

    IF @deleted = 0
        BEGIN
            UPDATE dbo.tasks
            SET is_deleted = 1
            WHERE
                project_id = @project_id AND _id = @task_id;
        END
END;
GO