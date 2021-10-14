ALTER PROCEDURE [dbo].[taskDelete]
(
     @id varchar(40),
     @is_deleted BIT
)
AS
BEGIN
    IF @is_deleted = 0
        BEGIN TRANSACTION;
        BEGIN TRY
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