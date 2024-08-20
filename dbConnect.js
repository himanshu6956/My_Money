const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ahimanshu6956:y22ye3y6i9YwZDao@cluster0.ujmnjix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' , {useNewUrlParser : true , useUnifiedTopology : true})

const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected' , () => console.log('Mongo DB Connection Successfull'))