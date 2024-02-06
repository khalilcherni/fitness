const express = require("express");
const router = express.Router();
const {get,deleted,put,posted} =require  ('../controllers/productsController')



  router.get('/Products',get)
  router.post('/Products',posted)
  router.delete('/Products/:id',deleted)
  router.put('/Products/:id',put)

  module.exports=router