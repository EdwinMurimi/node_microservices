CREATE TABLE dbo.project_assignees (
    project_id VARCHAR (40) NOT NULL,
    user_id VARCHAR (40) NOT NULL,
    FOREIGN KEY (project_id) REFERENCES dbo.projects (_id),
    FOREIGN KEY (user_id) REFERENCES dbo.users (_id)
);