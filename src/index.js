const express = require('express') ;
const app = express () ;
const port = 3000 ;

app.get ('/', (req, res) => {
    res.send ('Hi Guys') ;
}) ;

app.listen (port, () => {
    console.log (`servidor corriendo en http://localhost:${port}`) 
}) 

