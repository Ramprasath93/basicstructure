const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(bodyparser.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "P@s5w0rd",
    port: 3306,
    database: "boolean-login"
})

// Database connection

db.connect(function (err) {
    if (err) {
        console.log(err, "err==>");
    } else {
        console.log("Data Connected Successfully");
    }
})

app.listen(5100, () => {
    console.log("Port Connected Successfully");
})