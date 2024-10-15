const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

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
   const restaurant = await Restaurant.create(req.body)
    res.json( restaurant )
})

app.put("/restaurants/:id", async (req, res) => {
    const updatedRestaurant = await Restaurant.update(req.body, {where: {id: req.params.id}})
    res.json({ updatedRestaurant })
})

app.delete("/restaurants/:id", async (req, res) => {
    const deletedRestaurant = await Restaurant.destroy({where: {id: req.params.id}})
    res.json( { deletedRestaurant })
})

module.exports = app;