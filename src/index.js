const mongoose = require('mongoose');
const work = require('./work');

(async () => {
    try {

        await mongoose.connect('mongodb://localhost:27017', {
            dbName: 'midb',
            useNewUrlParser: true,
        });


        await Worker();
    } catch (error) {
        console.error(error);
    }
})();
