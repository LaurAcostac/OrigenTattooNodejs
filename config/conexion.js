const mongoose = require('mongoose');

const uri = 'mongodb+srv://LauraAdso:ZGi3b7V9f1CNADek@cluster0.idychtf.mongodb.net/OrigenTattoo?retryWrites=true&w=majority'
mongoose.connect(uri, {useNewUriParser: true});

module.exports = mongoose