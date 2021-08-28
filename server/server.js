require('dotenv').config();
const config = require('./config/config')
const app = require('./express')
const mongoose = require('mongoose')

// Connection URL
mongoose.Promise = global.Promise;

mongoose.connect(config.mongoUri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB!');
});

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})
