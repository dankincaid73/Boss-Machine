const express = require('express');
const apiRouter = express.Router();

apiRouter.use(require('./minions'));
apiRouter.use(require('./ideas'));
apiRouter.use(require('./meetings'));

module.exports = apiRouter;
