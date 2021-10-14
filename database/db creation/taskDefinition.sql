CREATE TABLE dbo.tasks (
    _id VARCHAR (40) PRIMARY KEY,
    task_name VARCHAR (50) NOT NULL,
    project_id VARCHAR (40) NOT NULL,
    task_start DATETIME NOT NULL,
    task_end DATETIME NOT NULL,
    is_complete BIT NOT NULL CONSTRAINT TASK_IS_COMPLETE DEFAULT 0,
    is_deleted BIT NOT NULL CONSTRAINT TASK_IS_DELETED DEFAULT 0,
    FOREIGN KEY (project_id) REFERENCES dbo.projects (_id)
);