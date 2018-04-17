var mongoose= require('mongoose');

mongoose.Promise = global.Promise;
const address = process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp';

mongoose.connect(address);

module.esports = {
  mongoose
}
