const express = require('express');
const app = express();


app.get('/api/get', (req, res)=>{
    res.send({message: "hello back tpo nodejs"}) 
});


app.get('/api/get_user_details', (req, res)=>{
    res.send({
        user: {
            "name" : "Ayaz",
            "age" : 22,
            "contact": 12345
        }


    }) 
});

app.get('/api/testing', (req, res)=>{
    res.send({message: "Testing my node project"}) 
});


app.listen(8000, ()=> {
    console.log("Listening to 8000");
})