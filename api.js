const  express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// 实现CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
    res.header("Access-Control-Allow-Headers", "clm,Origin,X-Requested-With,Content-Type,Accept,Authorization");
    res.header("cache-control", "no-cache");
    res.header("content-type", "application/json; charset=utf-8");
    res.header("ETag", '');
    //header头信息设置结束后，结束程序往下执行，返回
    if(req.method.toLocaleLowerCase() === 'options'){
        res.status(204);
        return res.json({});   //直接返回空数据，结束此次请求
    }else{
        next();
    }
});
app.post("/p",(req,res)=>{
    console.log("123");
    res.send(req.body)
})

app.listen(5000,()=>{
    console.log("5000")
})