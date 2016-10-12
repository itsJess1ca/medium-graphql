'use strict';
import * as express from 'express';
import * as CORS from 'cors';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import { apolloExpress, graphiqlExpress } from 'apollo-server';

const app = express();

import schema from './schema.graphql';
import MediumConnector from './connectors/medium.connector';
//import { MongoConnector } from './connectors/mongo.connector';


function createContext() {
  return ({
    medium: new MediumConnector()
  })
}
//noinspection TypeScriptValidateTypes,TypeScriptUnresolvedFunction
app.use(CORS());
//noinspection TypeScriptValidateTypes,TypeScriptUnresolvedFunction
app.use(bodyParser.json());
//noinspection TypeScriptValidateTypes,TypeScriptUnresolvedFunction
app.use(
  '/graphql'
  , apolloExpress({
    schema: schema
    , context: createContext()
  })
);

//noinspection TypeScriptValidateTypes,TypeScriptUnresolvedFunction
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));


//noinspection TypeScriptUnresolvedFunction
app.listen(
  4000,
  () => console.log('GraphQL Server running at http://localhost:4000')
);
