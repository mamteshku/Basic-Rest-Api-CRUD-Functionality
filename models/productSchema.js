//created 28/09/2018
// importing mongoose module

const mongoose = require('mongoose')
// import schema 
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex',true);


let productSchema = new Schema(
    {
        productId :{
            type: String,
            unique:true
          }, 
          Name:{
           type:String,
           default:''
          },
          description:{
              type:String,
              default:''
          },
          bodyHtml :{
              type:String,
              default:''
          },
          category:{
              type:String,
              default:''
          },
          brand:{
            type:String,
            default:''
          },
          manufacturedOn :{
              type:Date,
              default:Date.now
          },
          expiryDate:{
              type:Date,
              default:Date.now
          },
          price:{
              type:Number,
              default:''
          },
          rating:{
              type:Number,
              default:''
          },
          warranty:{
              type:String,
              default:''
          },
          cashOnDelivery:{
              type:Boolean,
              default:false
          },
          emiAvailable:{
              type:Boolean,
              default:''
          }
        
    }
)

mongoose.model('products', productSchema);