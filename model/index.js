const mongoose = require('mongoose');
const { dbUrl } = require('../config/config.default')

main().catch(err => {
    console.log('MongoDB connect failed: ', err)
});

async function main() {
  await mongoose.connect(dbUrl);
  console.log('MongoDB connect success!')
}

module.exports = {
    User: mongoose.model('User', require('./user')),
    Article: mongoose.model('Article', require('./article')),
    Comment: mongoose.model('Comment', require('./comment'))
}
