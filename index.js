const express = require('express'); 
const app = express(); 
const path = require('path');
const rutas = require('./routes/enrutamiento')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.listen(9000, () =>{
    console.log('Puerto inicializado')
})

app.use('/api/v1/', rutas)

