http=require('http');
url=require('url');
querystring=require('querystring');
function onRequest(request,response)
{
    var path=url.parse(request.url).pathname;
    console.log('Request for'+path+' received.');
    var query=url.parse(request.url).query;
    console.log(query);
    var name=querystring.parse(query)["username"];
    var email=querystring.parse(query)["email"]
    var psw=querystring.parse(query)["password"]
    response.write('Hello '+name+', your email id is '+email+' followed by your password '+psw+' \n Thankyou!!!');
    response.end();

}
http.createServer(onRequest).listen(8000);
console.log('Server starting');