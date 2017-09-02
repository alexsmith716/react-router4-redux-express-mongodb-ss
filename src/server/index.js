
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import sourceMapSupport from 'source-map-support';

sourceMapSupport.install();

const app = express();
app.use('/static', express.static('./dist'));

console.log('JWT_SECRET???: ', process.env.JWT_SECRET);

app.listen(3000, () => console.log('Demo app listening on port 3000'));