rhimoo.defineClass("rhimoo.php.levenshtein",
{
	// Calculate Levenshtein distance between two strings
    // 
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_levenshtein/
    // +       version: 803.2519
    // +   original by: Carlos R. L. Rodrigues
    // *     example 1: levenshtein('Kevin van Zonneveld', 'Kevin van Sommeveld');
    // *     returns 1: 3

  statics : function(str1,str2){
		var s, l = (s = str1.split("")).length, t = (str2 = str2.split("")).length, i, j, m, n;
	    if(!(l || t)) return Math.max(l, t);
	    for(var a = [], i = l + 1; i; a[--i] = [i]);
	    for(i = t + 1; a[0][--i] = i;);
	    for(i = -1, m = s.length; ++i < m;){
	        for(j = -1, n = str2.length; ++j < n;){
	            a[(i *= 1) + 1][(j *= 1) + 1] = Math.min(a[i][j + 1] + 1, a[i + 1][j] + 1, a[i][j] + (s[i] != str2[j]));
	        }
	    }
	    return a[l][t];
	},
	

	defer: function(statics){

		levenshtein = rhimoo.php.levenshtein;

	}
});