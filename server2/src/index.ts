import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import morgan from 'morgan';

import { connect } from './Database/DBConnection';
import { getConfig } from './Config/index,';
import { schemaWithPermissions } from './Schema';

const { port } = getConfig();

export const main = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  if (app.get('env') === 'development') {
    app.use(morgan('combined'));
  }

  app.use(
    '/graphql',

    // graphqlHTTP(() => ({ schema: schemaWithPermissions }))
    graphqlHTTP(async (request) => ({
      schema: schemaWithPermissions,
      // graphiql: true,
      graphiql: { headerEditorEnabled: true },
      context: {
        // user: request.user,
        headers: request.headers
        // i18n: request.i18n
      }
    }))
  );

  app.get('/', (req, res) => {
    res.json({ message: "I'm ruuning here..." });
  });

  connect();

  app.listen(port, () => console.log('Server listening on port ' + port));
};

main().catch((err) => {
  console.log(err);
});
