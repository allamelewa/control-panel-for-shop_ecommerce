const router=require('express').Router();
const Product=require('../models/product.model');
var multer = require('multer');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, '../src/img')
  },
  filename: function (req, file, cb) {
  //  cb(null, Date.now() + '-' +file.originalname )
  cb(null,file.originalname )
  }
})

var upload = multer({ storage: storage }).single('file')



////////////////////////////////////////////////
router.route('/').get((req,res)=>{
    console.log('\x1b[32m','Product Show....')
    Product.find()
    .then(product=>res.json(product))
    .catch(err=>res.status(400).json('Error: '+err));
});
/////////////////////////////////////////////////
router.route('/add').post((req,res)=>{
    const id=req.body.id;
    const title=req.body.title;
    const info=req.body.info;
    const company=req.body.company;
    const price=req.body.price;
    const img=req.body.img;
    console.log('\x1b[32m',"id: "+id+", title: "+title+", info: "+info+", company: "+company+", price: "+price+", Img: "+img);
    const newProduct=new Product({id,title,price,company,info,img});
    newProduct.save()
    .then(()=>{
        console.log('\x1b[32m','Product added!');
        res.status(200).json('Product added!')})
    .catch(err=>{
        console.log(err);
        res.status(400).json('Error: '+err)});
});

/////////////////////////////////////////////////////////
router.route('/upload').post((req,res)=>{
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            console.log(err);
            return res.status(500).json(err)
        } else if (err) {
            console.log(err);
            return res.status(500).json(err)
        }
   return res.status(200).json('Uploaded Image')

 })

   // console.log('\x1b[32m','Uploaded Image');
   // res.status(200).json('Uploaded Image')
})
/////////////////////////////////////////////////////////
router.route('/search/:id').get((req,res)=>{
    console.log('\x1b[32m','searching by id .... '+req.params.id);
    Product.findById(req.params.id)
    .then(product=>res.json(product))
    .catch(err=>res.status(400).json('Error: '+err));
});
////////////////////////////////////////////////////////
router.route('/delete/:id').delete((req,res)=>{
    console.log('\x1b[32m','Product delete...'+req.params.id);
    Product.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Product deleted...'))
    .catch(err=>res.status(400).json('Error: '+err))
})
////////////////////////////////////////////////////////
router.route('/update/:id').post((req,res)=>{
    console.log('\x1b[32m','Product Updating....'+req.params.id);
    Product.findById(req.params.id).then(product=>{
        product.id=req.query.id;
        product.title=req.query.title;
        product.price=req.query.price;
        product.company=req.query.company;
        product.info=req.query.info;
        product.save()
        .then(()=>res.json('Product Updated....'))
        .catch(err=>res.status(400).json('Error :'+err))
    })
})
//////////////////////////////////////////////////////////
module.exports = router;