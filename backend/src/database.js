const mongoose = require('mongoose');

//console.log(process.env.MONGODB_URI);
const URI =  'mongodb+srv://fransempe:32668766@cluster0-0wfee.mongodb.net/whetu?retryWrites=true&w=majority';
//process.env.MONGODB_URI ;
// ? process.env.MONGODB_URI 
             

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const connection = mongoose.connection; 

connection.once('open', () => {
    console.log('DB is connected.');
})