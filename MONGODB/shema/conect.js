const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://bahmedilyas2:Eduspace2025@cluster0.qgp4t.mongodb.net/eduspace')
    .then(() => {
        console.log(" Connected to MongoDB Atlas");
    })
    .catch(err => {
        console.error(" Connection error:", err.message);
        console.error(err);
    });
