const express = require("express");
const router = express.Router();
const {get,deleted,put,posted} =require  ('../controllers/womenController')



  router.get('/women',get)
  router.post('/women',posted)
  router.delete('/women/:id',deleted)
  router.put('/women/:id',put)

  module.exports=router