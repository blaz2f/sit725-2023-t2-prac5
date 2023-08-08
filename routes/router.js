let express = require("express");
let router =  express.Router();
let controller  = require('../controller/controller.js')

router.get('/', (req,res)=>{
    controller.getAllCats(req,res);
});


router.post('/', (req, res) => {
    controller.insertCat(req,res);
});

module.exports = router;
