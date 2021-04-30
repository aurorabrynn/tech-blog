const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require("bcrypt");

router.get("/sessiondata", (req, res) => {
    res.json(req.session);
})

router.post("/signup", (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }).then(newUser => {
        req.session.user = {
            id: newUser.id,
            email: newUser.email,
            username: newUser.username
        };
        res.json(newUser)
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

router.post("/login", (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(foundUser => {
        if (!foundUser) {
            req.session.destroy();
            return res.status(401).send("login failed");
        }
        if (bcrypt.compareSync(req.body.password, foundUser.password)) {
            req.session.user = {
                id: foundUser.id,
                email: foundUser.email,
                username: foundUser.username
            };
            return res.json(foundUser)
        } else {
            req.session.destroy();
            return res.status(401).send("login failed");
        }
    })
})

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.send('logged out!')
})

module.exports = router;