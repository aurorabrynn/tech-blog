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
        password: req.body.password
    }).then(newUser => {
        req.session.user = {
            id: newUser.id,
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
            username: req.body.username
        }
    }).then(foundUser => {
        if (!foundUser) {
            req.session.destroy();
            return res.status(401).send("login failed");
        }
        if (bcrypt.compareSync(req.body.password, foundUser.password)) {
            req.session.user = {
                id: foundUser.id,
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