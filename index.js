const express = require('express');
const app = express();
const Rutas = require('./routes/rutas');
const jade = require('jade');
const mongoose = require('mongoose');
const formidable = require('express-formidable');
const cloudinary = require('cloudinary');


let port = process.env.PORT || 3000;

app.use(formidable({
	encoding: 'utf-8',
  	uploadDir: './uploads',
  	keepExtensions: true,
  	multiples: true
}));

app.set('views' , './views');
app.set('view engine', 'jade');
app.use(express.static('./static'));

app.use('/', Rutas);

cloudinary.config({ 
  cloud_name: 'accecar', 
  api_key: '581627995675862', 
  api_secret: 'y2jQCRNi1-UVx2n552vEi8Yywoc' 
});

mongoose.connect('mongodb://admin:admin@ds127101.mlab.com:27101/tallernode', err => {
	if(err) {
		console.log(err);
	} else {
		console.log('conectado con exito a la db');
	}
})


app.listen(port, err => {
	if(err) {
		console.log(err)
	} else {
		console.log(`server runing port ${port}`)
	}
});