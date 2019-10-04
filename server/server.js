import express from 'express';
import bodyparser from 'body-parser';
import { config } from 'dotenv';
import routefunc from './routes/routes';

config();

const port = process.env.PORT;
const app = express();
app.use(bodyparser.json());
routefunc(app);
app.listen(port, () => console.log(`listening on port ${port}...`));

export default app;
