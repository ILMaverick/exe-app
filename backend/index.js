const express = require('express');
const utentiRouter = require('./routes/utentiRouter')
const cors = require('cors')
const dotEnv = require('dotenv');

dotEnv.config({ path: __dirname + '/.env' });

const app = express();

app.use(cors());

app.use('/users', utentiRouter);
// app.use('/interventions', interventionsRouter);
// app.use('/hardware', hardwareRouter);
// app.use('/tech', techRouter);

app.listen(process.env.SERVER_PORT, () =>
    console.log(`Server EXE online sulla porta:${process.env.SERVER_PORT}`))