const express      = require('express');
const cookieParser = require('cookie-parser');
const session      = require('express-session');
const bodyParser   = require('body-parser');
const partials = require('express-partials');
const RateLimit    = require('express-rate-limit');
const path         = require('path'); 
var count = 0;
const app = express();

console.log(path.resolve(__dirname,'..'));

// set variables and  view engine setup
app.set('port', process.env.port || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('view options', {defaultLayout: 'layout'});

app.use(partials());
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'/node_modules/videojs-socialshare')));
app.use(express.static(path.join(__dirname,'/node_modules/videojs-seek-buttons/dist')));
app.use(express.static(path.join(__dirname,'/node_modules/video.js/dist')));
app.use(express.static(path.join(__dirname,'/node_modules/videojs-contrib-ads/dist')));


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
 res.render('index');
})
app.get('/video',function(req,res){
    res.render('video');
});
app.get('/icon',function(req,res){
    res.render('sample');
});
app.get('/hls',(req,res)=>{
    res.render('videojs-hls');
});
app.get('/player',(req,res)=>{
    res.render('player');
});
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