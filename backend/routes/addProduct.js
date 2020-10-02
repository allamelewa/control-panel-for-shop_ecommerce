const router=require('express').Router();
const Product=require('../models/product.model');

router.route('/').get((req,res)=>{
    console.log('\x1b[32m','Product Show....')
    Product.find()
    .then(product=>res.json(product))
    .catch(err=>res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res)=>{
    const id=req.query.id;
    const title=req.query.title;
    const info=req.query.info;
    const company=req.query.company;
    const price=req.query.price;
    console.log('\x1b[32m',"id: "+id+", title: "+title+", info: "+info+", company: "+company+", price: "+price);
    const newProduct=new Product({id,title,price,company,info});

    newProduct.save()
    .then(()=>{
        console.log('\x1b[32m','Product added....');
        res.send(req.query);
        res.json('Product added!')})
    .catch(err=>res.status(400).json('Error: '+err));
});


router.route('/search/:id').get((req,res)=>{
    console.log('\x1b[32m','searching by id .... '+req.params.id);
    Product.findById(req.params.id)
    .then(product=>res.json(product))
    .catch(err=>res.status(400).json('Error: '+err));
});

router.route('/delete/:id').delete((req,res)=>{
    console.log('\x1b[32m','Product delete...'+req.params.id);
    Product.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Product deleted...'))
    .catch(err=>res.status(400).json('Error: '+err))
})

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

module.exports = router;