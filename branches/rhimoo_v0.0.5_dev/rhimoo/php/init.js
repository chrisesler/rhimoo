rhimoo.loadRequired('rhimoo.php.library');

/* LETS AUTOLOAD THIS STUFF */

var phpDir = new File(root+'rhimoo/php/');
var fileList = phpDir.list();

for(var i = 0; i < fileList.length; i++) {
	var file = fileList[i];
	if(file.substr(0,1) != "." && file != 'init.js' && file != 'library.js'){
		//print("NAME: "+file);
		rhimoo.loadRequired('rhimoo.php.'+file.replace('.js',''));
	}
}

