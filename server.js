const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const PORT = 2000;

app.use(bodyparser.json());
// We can also use - app.use(express.json()) and we don't need import body parser
const data = [
    {
        "Name": "Antarip Chatterjee",
        "Class": 12,
        "age":17
    }
];

app.get('/',(req,res)=>{
    res.send(data);
});
app.post('/',(req,res)=>{
    const dat = req.body;
    data.push(dat)
    //console.log(req.body);
    res.send(`Hello ${dat.Name}`)
})

app.listen(PORT,()=>{
    console.log(`Running on ${PORT}`);
})
