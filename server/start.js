const app = require('./index')
const db = require('./db/db')
const port = process.env.PORT || 3000;

db.sync()
    .then(function(){
        app.listen(port)
    })