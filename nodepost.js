var http=require('http');
var querystring=require('querystring');
var qs,name,email,password;
http.createServer(function(req,res){
    var data1='';
    req.on('data',function(chunk){
        console.log(chunk);
    data1+=chunk;
console.log("Data in String format: "+data1);  
  });

req.on('end',function(){
    qs=querystring.parse(data1);
    console.log(qs);
    name=qs['username'];
    email=qs['email'];
    password=qs['password'];
    res.write("Hello "+name+", your email id is "+email+" and your password is"+password+"");
    res.end();
  });
}).listen(7777);
console.log("server started");