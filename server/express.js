const express = require('express');
const cookieParser = require('cookie-parser');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes')

const app = express();

app.use(express.json())

app.use(cookieParser());
app.use(compress());
app.use(helmet());

app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
}));

app.use('/', userRoutes);
app.use('/', authRoutes)
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message})
  }else if (err) {
    res.status(400).json({"error" : err.name + ": " + err.message})
    console.log(err)
  }
})

module.exports = app;
