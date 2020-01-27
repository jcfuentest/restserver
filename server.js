const express = require('express')
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/usuario', function(req, res) {
    res.json('get usuario')
});

app.post('/usuario', function(req, res) {

    if (req.body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "lalalalla"
        })
    } else {
        let data = req.body;
        res.json({
            data
        })
    }


});



app.put('/usuario/:id', function(req, res) {

    let id = req.params.id
    let nombre = "bastian ramirez"
    res.json({
        id,
        nombre

    })
});



app.delete('/usuario', function(req, res) {
    res.json('dete usuario')
});
app.listen(3000, () => {

    let hola = "hola mundo";
    let hi = JSON.stringify(hola)
    console.log(hi);
});