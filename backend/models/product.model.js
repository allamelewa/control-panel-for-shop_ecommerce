const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const productSchema=new Schema({
    id:{type:Number,required:true},
    title:{type:String,required:true},
    price:{type:Number,required:true},
    company:{type:String,required:true},
    info:{type:String,required:true},
    img:{type:String,required:true},
    inCart:{type:Boolean,required:true},
    count:{type:Number,required:true},
    total:{type:Number,required:true}
},{
    timestamps:true,
});

const Product = mongoose.model('Product',productSchema);

module.exports=Product;