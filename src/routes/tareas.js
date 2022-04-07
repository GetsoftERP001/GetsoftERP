const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Desde tareas')
});

module.exports = router;