const express = require("express");
const router = express.Router();
const {get,deleted,put,posted} =require  ('../controllers/proteinController.js')



  router.get('/Protein',get)
  router.post('/Protein',posted)
  router.delete('/Protein/:id',deleted)
  router.put('/Protein/:id',put)

  module.exports=router