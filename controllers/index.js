const authRoutes = require("./authRoutes");
const express = require('express');
const router = express.Router();
const apiAuth = require("../middleware/apiAuth")

router.use(authRoutes);

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/signup', (req, res) => {
    res.render('signup');
})

module.exports = router;