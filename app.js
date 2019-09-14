const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');


db.authenticate()
    .then(() => console.log("La base de datos se ha iniciado"))
    .catch(error => console.log(error));

const app = express();
app.use(bodyParser.urlencoded({
    extend: false
}));


var userRoute = require('./routes/UserRoutes');
app.use(bodyParser.json());
app.get('/', (req, resp) => resp.send('test'));
app.use('/api',userRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("Listening in port " + PORT));