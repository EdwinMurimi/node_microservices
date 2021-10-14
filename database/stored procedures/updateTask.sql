CREATE PROCEDURE [dbo].[taskUpdate]
(
    @id VARCHAR(40),
    @task_name VARCHAR(50),
    @task_start DATETIME,
    @task_end DATETIME,
    @is_deleted BIT
)
AS
BEGIN
    BEGIN TRANSACTION;
    IF @is_deleted = 0
      BEGIN TRY
          DECLARE @is_complete BIT;
          SET @is_complete = 0;
          SET NOCOUNT ON
          UPDATE dbo.tasks
          SET is_deleted = 1
          WHERE
              _id = @id;
          COMMIT TRANSACTION 
      END TRY

      BEGIN CATCH
          IF @@TRANCOUNT > 0
          BEGIN
              ROLLBACK TRANSACTION;
          END
      END CATCH
END;
GO