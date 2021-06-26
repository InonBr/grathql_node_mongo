const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema/schema');

const app = express();
const connectDB = require('./db/db');
const port = 5000;

app.use(cors());
app.use(express.json());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

connectDB().then(() => {
  console.log('🔵 MongoDB connected...');
  app.listen(port, () => {
    console.log(`🟢 App listening at http://localhost:${port}`);
  });
});
