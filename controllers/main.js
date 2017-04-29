const Product = require('.././models/product');
const cloudinary = require('cloudinary');

exports.init = (req,res) => {
	Product.find((err,response) => {
		if(err) {
			console.log(err)
		}else{
			res.render('index',{producto: response});
		}
	})
}

exports.admin = (req,res) => {
	res.render('admin')
}

exports.create = (req,res) => {

	console.log(req.files.fileimage.path)

	cloudinary.uploader.upload(req.files.fileimage.path, function(result) { 
	  let data = new Product({
			name: req.fields.name,
			price: req.fields.price,
			img: result.url,
			description: req.fields.description,
			date: new Date()
		});

		data.save((err,response) => {
			if(err){
				console.log(err)
			} else {
				res.redirect('/');
			}
		})
	});
}

exports.find = (req,res) => {
	Product.find((err,response) => {
		if(err) {
			console.log(err);
		} else {
			res.json(response);
		}
	})
}