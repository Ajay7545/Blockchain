//const uuid=require('uuid/v1');
//const port=process.argv[2];

var express=require('express')
var app=express()

/*app.get('/',function(req,res){
    res.send('Hello world')
})
app.listen(3000)


const bodyparse=require('body-parse');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
*/
app.get('/blockchain',function(req,res){
});

app.post('/transaction',function(req,res){
    res.send("its wrk...!");
    //console.log(req.body);
   // console.log(req.body.amount);
});

app.get('/mine',function(req,res){
});

app.listen(3000,function(){
    console.log('listening on port 3000..');
});