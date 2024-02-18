const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");
app.use(cors());

app.use(express.json());

let data = {};

app.get("/get", (request, response) => {
    const key = request.query.key;
    console.log(data);
    response.send({
        key: key,
        value: data[key]
    });
});

app.post("/set", (request, response) => {
    console.log(request.body);
    const key = request.body.key;
    const value = request.body.value;
    console.log(data);
    data[key] = value;
    response.send({
        message: "Data sent successfully!"
    })
});

app.listen(port);