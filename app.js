const express      = require('express');
const cookieParser = require('cookie-parser');
const session      = require('express-session');
const bodyParser   = require('body-parser');
const RateLimit    = require('express-rate-limit');
const path         = require('path'); 
var count = 0;
const app = express();

console.log(path.resolve(__dirname,'..'));

// set variables 
app.set('port', process.env.port || 3000);
app.set('view engine','html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser('santosh'));
app.use(session({
    secret: "santosh",
    resave: true,
    saveUninitialized: true
  }));
  var Limiter = new RateLimit({
    windowMs: 60*1000, // 1 min window 
    delayAfter: 0, // begin slowing down responses after the first request 
    delayMs: 0, // slow down subsequent responses by 3 seconds per request 
    max: 5, // start blocking after 5 requests 
    message: "Too many accounts created from this IP, please try again after an hour"
  });
app.get('/',function(req,res){
 res.send('Welcome');
})

app.get('/limit',Limiter,function(req,res){
    var ip = req.ip;
    var message = "After 5 hit you wont be able to access API ";
    res.type('html'); 
    res.send('<b>IP Address :'+ip +' count  :'+ count++ + ' <br> <br>'+message +' </b><br> <pre> '+JSON.stringify(req.headers)+'</pre>');
})
app.use((req,res, next)=>{
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use(function(err,req,res,next){
    res.status(err.status || 500);
    res.send(err);
});
app.listen(app.get('port'),function(){
    console.log('listening to port '+app.get('port'));
})