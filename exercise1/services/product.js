const Products = require("../models/products")

const findById = async (id) => {
  try {
    return {
      success: true,
      data: {}
    };
  } catch (err) {
    return {
      success: false,
      error: err || 'error'
    }
  }
}

const findAll = async ()=>{
  // to do
}

const create = async () => {
  // to do
}

const update = async () => {
  // to do
}

const remove = async () => {
  // to doF
}

module.exports = {
  findById,
  update,
  remove,
  findAll,
  create
}