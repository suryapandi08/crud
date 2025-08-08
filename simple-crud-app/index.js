const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js")

const app = express()
const port =8000;



app.use(express.json())
app.use(express.urlencoded({extented: false}));

//// app.use(express.urlencoded({ extended: false })) is a built-in middleware in Express 
//// that helps your server read form data sent from the client (especially from HTML <form> submissions).

//// routes
app.use("/api/products",productRoute)

app.get('/',(req,res)=>{
    res.send("Hello from node API Server.")
});


//// view  the product
// app.get('/api/products',async (req,res)=>{
   /// codes move to controller
// });

//// for getting specific ID
// app.get('/api/products/:id' ,async(req,res)=>{
    /// codes move to controller
// })

//// move to mongodb
// app.post('/api/products', async (req,res)=>{
//    // // console.log(req.body);
//    // // res.send(req.body)   // for checking in postman or thunderclient directly
//     //// for bring or access model scheme
    /// codes move to controller
// })

//// update a product
// app.put('/api/products/:id', async (req,res)=>{
    /// codes move to controller
// })

//Delete a product
// app.delete('/api/products/:id',async (req,res)=>{
    /// codes move to controller
// })

mongoose.connect("mongodb+srv://surya:crud-operation@cluster0.n3viqef.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to database!");
    app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`)
});
})
.catch(()=>{
    console.log("connectin failed!");
    
})