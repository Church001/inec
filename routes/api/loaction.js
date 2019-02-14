const express = require('express');
const router = express.Router();

router.get('/voter', (req, res) => {
    res.json({ msg: "it works"})
})

module.exports = router;