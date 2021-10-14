CREATE TABLE dbo.task_assignees (
    task_id VARCHAR (40) NOT NULL,
    user_id VARCHAR (40) NOT NULL,
    FOREIGN KEY (task_id) REFERENCES dbo.tasks (_id),
    FOREIGN KEY (user_id) REFERENCES dbo.users (_id)
);