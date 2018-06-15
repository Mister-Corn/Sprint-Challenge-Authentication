const { server } = require('./server');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
// mLaB
const { MONGO_URI } = require('./settings');

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, {
  useMongoClient: true
})
  .then(() => console.log('\n*** Connected to mLabs Mongo Database ***\n'))
  .catch(err => console.log('Mongo Connection Error:',err));


server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
