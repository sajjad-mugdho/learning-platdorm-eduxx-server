

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/category.json')
const courses = require("./data/courses.json")

app.use(cors());

app.get('/', (req, res) => {
    res.send('eduxx api running')
});

app.get('/courses-categories', (req, res) => {
    res.send(categories)
});

app.get("/courses/:id", (req, res) => {
    const id = req.params.id;

    if (id === "10") {
        res.send(courses)
    }
    else {
        const selectedCourse = courses.find(course => course.id === id);
        res.send(selectedCourse)
    }
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log('eduxx api is runnig ', port);
})
