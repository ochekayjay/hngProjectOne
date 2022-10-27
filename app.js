const express = require('express');
const port = process.env.PORT || 5000;
const cors = require('cors');

const app  = express();

app.use(cors({
    origin: '*'
  }));



app.get('/',(req,res)=>{
    res.json({"slackUsername":'Igoche',
                "backend":true,
            "age":24,
        "bio":"I am very inquisitive by nature"})
})



  app.listen(port, ()=> console.log('in here'))