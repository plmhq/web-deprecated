<!DOCTYPE html>
<html lang="en">
<head>
	<title ng-bind="'Pamantasan ng Lungsod ng Maynila - ' + $state.current.data.title"> Pamantasan ng Lungsod ng Maynila </title>
	<meta charset="utf-8">

	<!-- Stylesheets -->
	<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
	<link href="/assets/vendor/bootstrap/dist/css/bootstrap.min.css" type="text/css" rel="stylesheet">
	<link href="/assets/vendor/slick-carousel/slick/slick.css" type="text/css" rel="stylesheet">
	<link href="/assets/vendor/ngprogress-lite/ngprogress-lite.css" type="text/css" rel="stylesheet">
	<link href="/assets/css/main.min.css" type="text/css" rel="stylesheet">
	<!-- Favicon -->
	<link type="image/png" rel="shortcut icon" href="/assets/img/favicon.png">

	<base href="/">
</head>

<body>
	<div ui-view> </div>
	
	<!-- Scripts -->
	<script type="text/javascript" src="/assets/js/libs.js"></script>
	<script type="text/javascript" src="/assets/js/build.js"></script>
</body>
</html>