const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProducts,getproduct,createproduct,updateproduct,deleteproduct} =require("../controllers/product.controller.js")


router.get('/', getProducts);

router.get('/:id',getproduct );

router.post('/', createproduct);

router.put('/:id', updateproduct);

router.delete('/:id', deleteproduct);




module.exports= router;