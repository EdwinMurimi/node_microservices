SELECT * FROM dbo.projects;

DELETE FROM dbo.users;

DROP TABLE dbo.users;

INSERT INTO [dbo].[projects]
      (_id, 
       project_name,
       project_start, 
       project_end
      )
    VALUES
      ('4784da10-2ce3-11ec-b31c-631196db0c2e',
       'Amarok Inc.',
       '2021-10-13',
       '2021-12-12'
    );

ALTER TABLE [dbo].[tasks] 
ADD CONSTRAINT USER_ID_ON_TASKS FOREIGN KEY (user_Id) REFERENCES dbo.users (_id);

ALTER TABLE [dbo].[tasks]
ALTER COLUMN task_name VARCHAR(255);
