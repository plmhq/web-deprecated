<!DOCTYPE html>
<html lang="en">

<head>
	<title> Ey </title>
	<meta charset="utf-8">

	<!-- Stylesheets -->
	<link href="./assets/vendor/bootstrap/dist/bootstrap.min.css" type="text/css" rel="stylesheet">
	<link href="./assets/css/stylesheet.css" type="text/css" rel="stylesheet">

	<!-- RequireJS -->
	<script type="text/javascript"
		src="./assets/requirejs/require.js"
		data-main="./app/app.js">
	</script>

	<base href="/">
</head>

<body>
	<div class="container">
		<div ui-view/>
	</div>
</body>

</html>