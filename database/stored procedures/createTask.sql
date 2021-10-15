CREATE OR ALTER PROCEDURE [dbo].[createNewTask]
	@id varchar(40),
	@task_name varchar(255),
	@project_id varchar(40),
	@user_id varchar(40),
    @task_start date,
    @task_end date
AS

SET NOCOUNT ON;

BEGIN
	INSERT INTO dbo.tasks
	(_id, task_name, project_id, task_start, task_end, user_Id)
	VALUES
	(@id, @task_name, @project_id, @task_start, @task_end, @user_id);
END;