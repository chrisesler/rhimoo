<html>
<head>
	<title>Article Index YAY</title>
	<style>dt{font-weight:bold;}</style>
</head>
<body>

<h1>Synergy Blog 2</h1>
<dl>
	<?js for (var i = 0, n = articles.length; i < n; i++) { ?>
	  <dt>${articles[i].title}</dt><dd>${articles[i].body}</dd>
	<?js } ?>
</dl>

</body>
</html>