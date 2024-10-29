const express = require('express')
const { Products } = require('./data')
const path = require('path')
const app = express()
const logger = require('./logger')
const authorize =require('./authorize')
const morgan = require('morgan')
//
// app.use([logger,authorize])

app.use(morgan('tiny'))
app.get('/',(req,res)=>{
    console.log('this is called')
    res.send('Hello World')
})


app.get('/about',(req,res)=>{
    console.log('html page is called')
    res.sendFile(path.resolve(__dirname, './static/hello.html'))
})


app.get('/products',(req,res)=>{
    res.json(Products)
})



app.get('/api/products',(req,res)=>{

    const newProducts = Products.map((product)=>{
        const {id,name,description,price} = product
        return {id,name,description,price}
    })
    res.json( newProducts)
})


app.get('/api/products/:productID',(req,res)=>{

    const { productID } = req.params
    const singleProduct = Products.find((product) => product.id === Number(productID))
    console.log(singleProduct)

    if(singleProduct){
       return res.json(singleProduct)
    }else{
        return res.status(404).json({message:'product not found'})
    }
})


app.get('/api/v1/query',  (req, res) => {
    console.log(req.query)
    const { search, limit } = req.query
    let sortedProducts = [...Products]
    if (search) {
        sortedProducts = sortedProducts.filter((product) => 
            product.name.toLowerCase().includes(search.toLowerCase())
        )
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    res.json(sortedProducts)
})


app.get('/items',(req,res)=>{
    res.json('items')
})

app.listen(5000,()=>{
    console.log("server is listening at port 5000")
})
