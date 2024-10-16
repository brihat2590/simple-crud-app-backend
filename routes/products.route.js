const express=require("express");
const { getProduct, addProduct, createProduct, deleteProduct } = require("../controllers/product.controller");
const router=express.Router()

router.get('/',getProduct)

router.post('/',createProduct)
router.put("/:id",addProduct)
router.delete("/:id",deleteProduct)

module.exports=router;