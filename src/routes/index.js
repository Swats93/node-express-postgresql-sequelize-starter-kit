import express from 'express';

import users from 'src/routes/users';

const app = express();

app.get('/', (req, res) => res.send('Hello World!!'));

app.use('/users', users);

export default app;