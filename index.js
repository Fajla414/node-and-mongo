// const express = require('express');
// const app = express();
// app.get('/', (req, res) =>{
//     res.send("I know how to open Node ");
// })
// app.listen(3000, () => console.log('listenting to port 3000'))



const express = require('express');
const app= express();

app.get('/', (req, res) =>{
    res.send('How are you, today?')
})

app.listen(3100, ()=> console.log('Listening to port 3100'));