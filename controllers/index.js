const authRoutes = require("./authRoutes");
const express = require('express');
const router = express.Router();
const apiAuth = require("../middleware/apiAuth")

router.use(authRoutes);

router.get('/', (req, res) => {
    res.render('index');
})

router.get("/secretclubpage", (req, res) => {
    if (!req.session.user) {
        return res.redirect("/")
    } else {
        res.render("secretclub", req.session.user)
    }
})


router.get("/secretclub", apiAuth, (req, res) => {
    res.send(`welcome to the club, ${req.session.user.username}!  We will reach you at ${req.session.user.email}`)
})

module.exports = router;