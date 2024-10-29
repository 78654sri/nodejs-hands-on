const express = require('express')
const { Products } = require('./data')
const {people}=require('./data')
const path = require('path')
const app = express()
const logger = require('./logger')
const authorize =require('./authorize')
const morgan = require('morgan')
//
const bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json());
// app.use([logger,authorize])
// app.use(express.urlencoded({ extended: true }));

app.use(express.static('./frontend-files'))
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


app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

app.post('/api/people',(req,res)=>{
    const {name}= req.body
 

    if(!name){
        return res.status(400).json({success:false,msg:'please provide name'})
    }
    return res.status(201).json({success:true,person:name})

})

app.put('/api/people/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === Number(id));
    if (!person) {
        return res.status(404).json({ success: false, msg: 'person not found' });
    }


    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            return { ...person, name: name };
        }
        return person;
    });


    people = newPeople;

    return res.status(200).json({ success: true, data: people });
});

app.delete('/api/people/:id', (req, res) => {
    const { id } = req.params;


    const person = people.find((person) => person.id === Number(id));
    if (!person) {
        return res.status(404).json({ success: false, msg: 'person not found' });
    }


    const newPeople = people.filter((people)=>person.id!==Number(id))

    people = newPeople;

    return res.status(200).json({ success: true, data: people });
});


app.post('/login',(req,res)=>{
    console.log(req.body);
    const {name}= req.body
 

    if(name){
        return res.status(200).send(`welcome ${name}`)
    }
    return res.status(200).send('please provide name')
})

app.get('/items',(req,res)=>{
    res.json('items')
})

app.listen(5000,()=>{
    console.log("server is listening at port 5000")
})
