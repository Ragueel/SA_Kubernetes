const express = require("express");

const app = express();

app.get('/',(req,resp)=>{
    resp.send({'status': 'OK'});
})

app.get('/health', (req,resp)=>{
    resp.send({'status': 'OK'});
});


app.get('/other', (req,resp)=>{
    resp.send({'status': 'CHECKING'});
});

app.get('/:student', (req,resp)=>{
    resp.send({'user': req.params.student})
});

app.listen(5010, ()=>{
    console.log('Started server at 5010');
})