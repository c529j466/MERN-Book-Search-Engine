const mongoose = require('mongoose');

mongoose.connect(process.env.PORT || 'mongodb://localhost:3001/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
