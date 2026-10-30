const express = require('express');

const app = express();
const PORT = 3000; 

app.get('/', (req, res)=> {
    res.send('<h1>yoo wsp gang!!</h1>');
});

app.listen(PORT, ()=> {
    console.log('server running at http://localhost:' + PORT );
});