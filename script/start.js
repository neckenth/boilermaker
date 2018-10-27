const app = require('../server/index')
const db = require('../server/db/db')
const port = process.env.PORT || 3000;

db.sync()
    .then(function(){
        app.listen(port)
    })