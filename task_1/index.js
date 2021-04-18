const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.options('*', cors());

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

app.get('/apiTest/:sample', (req, resp)=>{
    resp.send({'apiTest' : req.params.sample, 'isWorking': true});
});

app.listen(5010, ()=>{
    console.log('Started server at 5010');
});