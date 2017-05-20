var http = require('http');


http.get(process.argv[2],function(res) {

  res.setEncoding('utf8');
  res.on('data', function(chunck) {


    rawData += chunk;

  });

res.on('error', function(err) {

  console.log(rawData.length)
})

  //res.on('end', function(){
    //var data = rawData.split()
  //});
})
