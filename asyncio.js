var fs = require('fs');
var jumlahLine;
fs.readFile(process.argv[2], function(err, data) {


  if(err) {

    console.log('error',err);
    return;
  }

  jumlahLine = data.toString().split('\n').length-1;


  console.log(jumlahLine);
});
