import express from 'express';
import bodyParser from 'body-parser';

import {server} from 'config';
import routes from './routes';
import models from './models';

models.sequelize.sync({force: true}).then(() => {
  // Table created
  console.log("sequelize connectionn established and models created", models.users);
});


const app = express();

//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '50mb'}));

app.use(routes);

app.get('/', (req,res) => res.send("hello, get request"));

app.listen(server.port, server.host, () => {
  console.log(`app running on http://${server.host}:${server.port}`);
});
