const Products = require("../models/products")

const findById = async (id) => {
  try {
    const product = await Products.findById(id)
    return {
      success: true,
      data: product
    };
  } catch (err) {
    return {
      success: false,
      error: err.message
    }
  }
}

const findAll = async ()=>{
  try {
    const products = await Products.find()
    return {
      success: true,
      data: products
    };
  } catch (err) {
    return {
      success: false,
      error: err.message
    }
  }
}

const create = async (newProduct) => {
  try {
    const product = await Products.create(newProduct)
    return {
      success: true,
      data: product
    };
  } catch (err) {
    return {
      success: false,
      error: err.message
    }
  }
}

const update = async (id, newProduct) => {
  try {
    const product = await Products.findById(id)
    product.title = newProduct.title
    product.price = newProduct.price
    product.category = newProduct.category
    product.item = newProduct.item
    product.user = newProduct.user
    await product.save()
    return {
      success: true,
      data: product
    };
  } catch (err) {
    return {
      success: false,
      error: err.message
    }
  }
}

const remove = async (id) => {
  try{
    await Products.deleteOne({_id:id})
    return {
      success : true,
      data : "product deleted"
    }
  }catch(err){
    return {
      success : false,
      err : err.message
    }
  }
}

module.exports = {
  findById,
  update,
  remove,
  findAll,
  create
}