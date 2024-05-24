const express = require('express')
const fs = require('fs')
const path = require('path')

//criação do server
const app = express()

app.get('/',(req, res) =>{
    fs.readFile(path.join(__dirname, 'index.html'), (err,data)=>{
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor")
        }else{
            res.status(200).type('text/html').send(data)
        }
    })
})
app.get('/Logo.png',(req, res) =>{
    fs.readFile(path.join(__dirname, 'Logo.png'), (err,data)=>{
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor")
        }else{
            res.status(200).type('png').send(data)
        }
    })
})

app.get('/cardapio',(req, res) =>{
    fs.readFile(path.join(__dirname, 'cardapio.html'), (err,data)=>{
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor")
        }else{
            res.status(200).type('text/html').send(data)
        }
    })
})
app.get('/cardapio.js', (req,res) =>{
    fs.readFile(path.join(__dirname, 'cardapio.js'), (err,data)=>{
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor")
        }else{
            res.status(200).type('text/javascript').send(data)
        } 
    })
})
app.get('/bebida',(req, res) =>{
    fs.readFile(path.join(__dirname, 'bebida.html'), (err,data)=>{
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor")
        }else{
            res.status(200).type('text/html').send(data)
        } 
    })
})
app.get('/bebida.js', (req,res) =>{
    fs.readFile(path.join(__dirname, 'bebida.js'), (err,data)=>{
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor")
        }else{
            res.status(200).type('text/javascript').send(data)
        } 
    })
})

app.get('/pedido',(req, res) =>{
    fs.readFile(path.join(__dirname, 'pedido.html'), (err,data)=>{
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor")
        }else{
            res.status(200).type('text/html').send(data)
        }
    })
})

//configuração do server
const PORT = 4500
app.listen(PORT, () => {
    console.log(`Servidor criado na porta: ${PORT}`)
})