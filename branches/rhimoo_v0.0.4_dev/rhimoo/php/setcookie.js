rhimoo.defineClass("rhimoo.php.setcookie",
{
	// Send a cookie
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_setcookie/
    // +       version: 803.2519
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // *     example 1: setcookie('author_name', 'Kevin van Zonneveld');
    // *     returns 1: true

  statics : function(name, value, expires, path, domain, secure){
		expires instanceof Date ? expires = expires.toGMTString() : typeof(expires) == 'number' && (expires = (new Date(+(new Date) + expires * 1e3)).toGMTString());
	    var r = [name + "=" + escape(value)], s, i;
	    for(i in s = {expires: expires, path: path, domain: domain}){
	        s[i] && r.push(i + "=" + s[i]);
	    }
	    return secure && r.push("secure"), document.cookie = r.join(";"), true;
	},
	

	defer: function(statics){

		setcookie = rhimoo.php.setcookie;

	}
});