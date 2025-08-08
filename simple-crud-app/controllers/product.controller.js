const Product = require("../models/product.model.js");



//// view  the product
const getProducts= async (req,res)=>{
     try {
        const products =await Product.find({});
        res.status(200).json({products})
    } catch (error) {
        res.status(500).json({message: error.message});
    }}

//// for getting specific ID
const getproduct = async (req,res)=>{

    try {
        const { id }=req.params;
       const product=  await Product.findById(id);
       res.status(200).json({product})
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

//// move to mongodb
const  createproduct = async(req,res)=>{
    try {
        const products = await Product.create(req.body);
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}


//// update a product
const updateproduct  = async(req,res)=>{
      try {
    const {id} =req.params;
    const product =  await Product.findByIdAndUpdate(id,req.body);

    if(!product){
        res.status(404).json({message:"product not found"})
    }

   const updateProduct = await Product.findById(id);
   res.status(200).json(updateProduct)
    // else{
    //     res.status(200).json({product})
    // }
} catch (error) {
    res.status.json({message:error.message})
}
}


//Delete a product
const deleteproduct  = async(req,res)=>{
       try {
              const {id} =req.params;
              const deleteproduct = await Product.findByIdAndDelete(id);
              
              if(!deleteproduct){
                  return res.status(404).json({message:"product not fount"})
              }
              res.status(200).json({message:"product deleted successfully"});
      
          } catch (error) {
              res.status(500).json({message:error.message})
          }
}




    module.exports={
        getProducts,
        getproduct,
        createproduct,
        updateproduct,
        deleteproduct


    }