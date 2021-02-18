const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    cart: {
        items: [
            {
                imageId: {
                    type: Schema.Types.ObjectId,//тип: id
                    required: true,
                    ref: 'Projects'//с какой колекцеей связать
                }
            }
        ]
    }
});

module.exports = model('User', userSchema);