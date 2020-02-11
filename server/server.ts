import * as express from 'express';
import { Application } from 'express';
import { AddressInfo } from 'net';
import { initRestApi } from './api';
import { apiErrorHandler } from './common/apiErrorHandler';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());
initRestApi(app);
app.use(apiErrorHandler);

const httpServer = app.listen(8090, () => {
  console.log('HTTP REST API Server running at http://localhost:' + (httpServer.address() as AddressInfo).port);
});
