const express=require("express")
const mongoose=require("mongoose")
const app=express()
const product=require('./models/product.model.js')
const router=require("./routes/products.route.js")

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api/products",router)







mongoose.connect('mongodb+srv://brihat:Brihatbir1@cluster0.ymp18.mongodb.net/productss1')
.then(()=>{
    console.log("connected to the database")
    app.listen(3000,()=>{
        console.log('listening on port 3000')
    })
})
.catch(()=>{
    console.log("connection failed")

})





