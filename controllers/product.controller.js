const product=require("../models/product.model")

const getProduct=async(req,res)=>{
    try{
        const products=await product.find({})
        res.json(products)

    }
    catch(error){
        res.status(400).send({
            message:error.message
        })
    }

}
const getProductById=async(req,res)=>{
    try{
        const {id}=req.params
        const products=await product.findById(id)
        res.status(200).json(products)

    }
    catch(error){
        res.status(300).send({
            message:error.message
        })
    }
}
const addProduct=async(req,res)=>{
    try{
        const {id}=req.params
    const products=await product.findByIdAndUpdate(id,req.body)
    if(!products){
        res.status(403).json({
            message:"product not found"
        })
        
    }
    
    const updatedProduct=await product.findById(id)
    res.json(updatedProduct)
    
   

    }
    catch(e){
        res.status(500).json({
            message:e.message
        })
    }
}
const createProduct=async function(req,res){
    try{
        const products=await product.create(req.body)
        res.json({products})

    }
    catch(error){
        res.status(500).send({
            message:error.message
        })

    }
}
const deleteProduct=async(req,res)=>{
    try{
    const {id}=req.params
    const products =await product.findByIdAndDelete(id)
    if(!products){
        res.json({
            message:"product not found bro"
        })
    }
    else{
        res.json({
            message:"product is successfully deleted"
        })
    }



}
catch(error){
    res.status(303).send({
        message:error.message
    })
}

}
module.exports={
    getProduct,
    getProductById,
    addProduct,
    createProduct,
    deleteProduct

}