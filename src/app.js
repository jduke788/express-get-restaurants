const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

app.use(express.json());
app.use(express.urlencoded());

//TODO: Create your GET Request Route Below: 
app.get("/restaurants", async (req, res) => {
    const restaurants = await Restaurant.findAll();
    res.json(restaurants);


})

app.get("/restaurants/:id", async (req, res) => {
    const parameter = req.params.id
    const restaurant = await Restaurant.findByPk(parameter)
    res.json(restaurant)
    }
)

app.post("/restaurants", async (req, res) => {
   await restaurant.push(req.body.restaurant)
    res.json({ restaurant })
})

app.put("/restaurants/:id", async (req, res) => {
    const parameter1 = req.params.id
    const restaurant = parameter1
    res.json({ restaurant })
})

app.delete("/restaurants/:id", async (req, res) => {
    const parameter2 = req.params.id
    const restaurants = parameter2
    restaurants.splice(restaurants, 1)
    res.json( { restaurants })
})

module.exports = app;