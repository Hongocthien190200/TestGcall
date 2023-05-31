const express = require('express');
const app = express();
const port = 4000;
const apiRouter = require('./src/presenters/api')
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
const morgan = require('morgan') //morgan bắn ra log
//xử lý dữ liệu Json
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// Middleware để phục vụ các tệp tin tĩnh từ thư mục 'client/build'
app.use(express.static('client/build'));
app.use(morgan('combined'))//dùng morgan
//conect DB
const db = require('./src/gateway/database/adapter_mongo');
//conect to DB
db.connect();
// Định tuyến trang chủ của React
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html');
});
app.use('/api', apiRouter);
// Khởi động server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
