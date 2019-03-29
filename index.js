'use strict'

const app = require('./app')




app.listen(app.get('port'), (error, response) => {
    if (error) {
        throw error
    } else {
        console.log('Server in port ', app.get('port'));
    }
})







module.exports = app     