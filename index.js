const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes/crmRoutes');
const app = express();

const PORT = 4000;

// mongoose connection
mongoose.connect(
  'mongodb://localhost/CRMdb',
  { useNewUrlParser: true }
);

//middleware to parse incoming requests with JSON or query string payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.get('/', (req, res) => {
  res.send(`Node an express server is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
