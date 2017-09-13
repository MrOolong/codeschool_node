var myMod = require('./my_modules');
myMod.foo();
myMod.bar();

var http = require("http");
var message = "Here's looking at you, kid.";

var makeRequest = function(message) {
    var options = {
      host: 'localhost', port: 8080, path: '/', method: 'POST'  
    };
    
    var request = http.request(options, function(response){
       response.on('data', function(data){
           console.log(data); //logs reponse body
       }); 
    });

request.write(message); //begins request
request.end(); //ends request
}

makeRequest("Here's looking at you kid.") //call function with string