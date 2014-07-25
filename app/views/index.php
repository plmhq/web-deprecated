<!DOCTYPE html>
<html lang="en">
<head>
	<title ng-bind="'Pamantasan ng Lungsod ng Maynila -' + $state.current.name"> Pamantasan ng Lungsod ng Maynila </title>
	<meta charset="utf-8">
	<base href="/">

	<!-- Stylesheets -->
	<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
	<link href="/assets/vendor/bootstrap/dist/css/bootstrap.min.css" type="text/css" rel="stylesheet">
	<link href="/assets/vendor/slick-carousel/slick/slick.css" type="text/css" rel="stylesheet">
	<link href="/build/css/main.min.css" type="text/css" rel="stylesheet">

	<!-- Favicon -->
	<link type="image/png" rel="shortcut icon" href="/assets/img/favicon.png">
</head>

<body>
	<div ui-view> </div>
	
	<!-- Scripts -->
	<script type="text/javascript" src="/build/js/main.min.js"></script>
</body>
</html>