const mongoose = require('mongoose');
const { Schema } = mongoose;
const baseModel = require('./base.model')
const md5 = require('../util/md5')

const userSchema = new Schema({
    ...baseModel,
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        set: val => md5(val),
        // 查询时不返回该字段
        select: false
    },
    email: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: null
    },
    image: {
        type: String,
        default: null
    }
})

module.exports = userSchema
