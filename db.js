const { response } = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://savi_hs:Savihs29@cluster0.8vduuje.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,

})
    .then((response) => {
        console.log("connected to database");
    })
    .catch((error) => {
        console.log(error);
    });