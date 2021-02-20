  
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/connect.database');
const routes = require('./routes/index.router');
const port = 5050
app.use(bodyParser.urlencoded({
    extended: false 
}));
app.use(bodyParser.json());
//connect MongoDB
db.connect()
//routes init
routes(app);
app.get('*', function (req, res) {
    res.status(404).json({
        message: "Trang không tồn tại, vui lòng thử lại"
    });
})
app.post('*', function (req, res) {
    res.status(404).json({
        message: "Trang không tồn tại, vui lòng thử lại"
    });
})
app.listen(port, () => {
    console.log("Server is running" );
});
