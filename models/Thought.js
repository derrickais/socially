const { get } = require('express/lib/response');
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const ThoughtSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            validate: [validateEmail, 'Please fill a valid email address']
        },
        thoughts: {

        },
        friends: {

        }
    }
)