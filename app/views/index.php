<!DOCTYPE html>
<html lang="en">
<head>
	<title ng-bind="'Pamantasan ng Lungsod ng Maynila - ' + $state.current.data.title"> Pamantasan ng Lungsod ng Maynila </title>
	<meta charset="utf-8">

	<!-- fonts -->
	<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900,200italic,300italic,400italic,600italic,700italic,900italic">
	<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Merriweather:400,700italic,400italic,300,900,700,900italic,300italic">
	<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Montserrat:400,700">

	<!-- stylesheets -->
	<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
	<link href="/src/vendor/bootstrap/dist/css/bootstrap.min.css" type="text/css" rel="stylesheet">
	<link href="/src/vendor/slick-carousel/slick/slick.css" type="text/css" rel="stylesheet">
	<link href="/src/vendor/ngprogress-lite/ngprogress-lite.css" type="text/css" rel="stylesheet">
	<link href="/assets/css/main.min.css" type="text/css" rel="stylesheet">
	
	<!-- favicon -->
	<link type="image/png" rel="shortcut icon" href="/assets/img/favicon.png">

	<base href="/">
</head>

<body>
	<div ui-view></div>
	
	<!-- Scripts -->
	<script type="text/javascript" src="/assets/js/main-libs.js"></script>
	<script type="text/javascript" src="/assets/js/main-build.js"></script>
</body>
</html>