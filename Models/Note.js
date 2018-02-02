const mongoose = require('mongoose');

module.exports = mongoose.model('Note', {
    author: {type: String},
    title: {type: String},
    content: {type: String},
    createdOn: {type: Date}
});
