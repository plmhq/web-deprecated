<!DOCTYPE html>
<html lang="en">

<head>
	<title> Ey </title>
	<meta charset="utf-8">

	<!-- Stylesheets -->
	<link href="/assets/vendor/bootstrap/dist/css/bootstrap.min.css" type="text/css" rel="stylesheet">
	<link href="/assets/css/stylesheet.css" type="text/css" rel="stylesheet">

	<!-- RequireJS | Scripts -->
	<script type="text/javascript"
		src="/assets/vendor/requirejs/require.js"
		data-main="/app/bootstrap.js">
	</script>

	<base href="/">
</head>

<body>
	<div class="container">
		<navigation></navigation>
		<div ui-view/>
	</div>
</body>

</html>