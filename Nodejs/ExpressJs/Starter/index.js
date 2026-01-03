const express= require('express')
const app= express()
app.get('/',(req,res)=>{
    res.send("shubham ")
})

app.listen(4000,()=>{
    console.log('server is starting on port number 4000');
    
})