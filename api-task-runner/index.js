const express = require('express');
const config = require('./config');
const cors = require('cors');
require('dotenv').config();


const app = express();

const usersRoute = require('./routes/users');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/api/users', usersRoute);
app.use('/api/projects', projectsRoute);
app.use('/api/tasks', tasksRoute);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`App running on port:${PORT}`));