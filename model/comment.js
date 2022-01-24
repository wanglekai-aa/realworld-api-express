const mongoose = require('mongoose');
const { Schema } = mongoose;
const baseModel = require('./base.model')
// const User = require('./user')

const commentSchema = new Schema({
    ...baseModel,
    body: {
        type: String,
        required: true
    },
    artId: {
        type: Schema.Types.ObjectId,
        ref: 'Article',
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = commentSchema
