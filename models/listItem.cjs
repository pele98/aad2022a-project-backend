const mongoose = require('mongoose');

const ListItemSchema = new mongoose.Schema({
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        require: true,
    },
    shopping_list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ShoppingList',
        require: true,
    },
    quantity: {
        type: Number,
        required: false,
        default: 1,
    },
    collected: {
        type: Boolean,
        default: false,
    },
    notes: {
        type: String,
        required: false,
    },
    total_price: {
        type: Number,
        required: false,
    },
    timestamps: false,
});

const ListItem = mongoose.model('ListItem', ListItemSchema);

module.exports = ListItem;