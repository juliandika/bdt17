var fs = require('fs');
var path = require('path');


fs.readdir(process.argv[2], function(err, list) {

  for(var i = 0; i < list.length; i++) {


    if('.'+process.argv[3] == path.extname(list[i])){

      console.log(list[i]);
    } else {
      continue;
    }

  }
});


/*


kunci jawaban

var fs = require('fs')
   var path = require('path')

   var folder = process.argv[2]
   var ext = '.' + process.argv[3]

   fs.readdir(folder, function (err, files) {
     if (err) return console.error(err)
     files.forEach(function (file) {
       if (path.extname(file) === ext) {
         console.log(file)
       }
     })
   })
   */
