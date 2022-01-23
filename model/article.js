const mongoose = require('mongoose');
const { Schema } = mongoose;
const baseModel = require('./base.model')
// const User = require('./user')

const articleSchema = new Schema({
    ...baseModel,
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    tagList: {
        type: [String],
        default: null
    },
    favorited: {
        type: Boolean,
        default: false
    },
    favoritesCount: {
        type: Number,
        default: 0
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = articleSchema
