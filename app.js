const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Trotamundos estará en Línea pronto');
})
 
app.listen(5000, ()=>{

	console.log("Iniciando servidor en puerto 5000");


});
