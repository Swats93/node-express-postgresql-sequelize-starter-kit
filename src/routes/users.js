import express from 'express';
import models from 'src/models';

const app = express();

app.get('/', (req,res) => res.send("Users get request handled"));

// models.users.findAll().then(users => {
//   console.log(users)
// })

export default app;