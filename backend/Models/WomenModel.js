const connection =require ('../database/index.js')

module.exports = {

    getAll :(callback) => {
        const sql = 'SELECT * FROM `fitnessforwomen` '
        connection.query(sql, function (error, results, fields) {
          callback(error, results);
    })},

    post: function (accData, callback) {
      const sql = 'INSERT INTO `fitnessforwomen` SET ? ';
      connection.query(sql, accData, function (error, results, fields) {
        if (error) {
          callback(error, null); 
        } else {
          callback(null, results); 
        }
      });
    },
    
     deleteacc :function (id, callback){
        const sql='DELETE FROM `fitnessforwomen` WHERE `id` = ?';
        connection.query(sql,[id], function (error, results, fields) {
          callback(error, results);
      })}
      ,
     updateacc :function (id,updatedacc ,callback){
      const sql = 'UPDATE `fitnessforwomen` SET ? WHERE id= ?';
      const values = [updatedacc, id];
      connection.query(sql, values, function (error, results, fields) {
        callback(error, results);
      })} 
}