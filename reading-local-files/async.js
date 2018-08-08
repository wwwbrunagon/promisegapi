let fs = require('fs');


fs.rename('ive-been-changed.html','re-name-me.html', function(err){
  	if(err){
  		console.log("Error while renaming file "+err)
  	}
});

//existSync 