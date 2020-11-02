const express = require('express');
const router = express.Router();

//@route GET api/profile
//@desc Test route
//@access Public (Need to add tokens for authorization purposes. For Public, not required)
router.get('/', (req, res) => {
    res.send('Profile route');
});

module.exports = router;