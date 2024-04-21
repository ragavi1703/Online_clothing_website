var module = require('./dbmodule');
var url = require('url');
var querystring = require('querystring');
var http = require('http');

http.createServer(function(request, response) {
var data1 = '';

request.on('data', function(chunk) {
            data1 += chunk;
        });

request.on('end', function() {
var user = querystring.parse(data1)["user"];
console.log(user);
var email = querystring.parse(data1)["email"];
console.log(email);
var pass = querystring.parse(data1)["pass"];
console.log(pass);
var password = querystring.parse(data1)["password"];
console.log(password);

if (request.url === '/login') {
module.authenticateUser(email,pass, response);
            } 
else if (request.url === '/save') {
module.saveUser(user,email,pass,password, response);
            } 
      });
    
}).listen(3000);
console.log("Server started");