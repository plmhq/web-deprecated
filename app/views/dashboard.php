<!DOCTYPE html>
<html lang="en">
<head>
	<title ng-bind="'PLM Dashboard - ' + $state.current.data.title"> PLM Dashboard </title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<meta charset="utf-8">

	<!-- fonts -->
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,300,700,600,800,400' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900,200italic,300italic,400italic,600italic,700italic,900italic">
	<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Merriweather:400,700italic,400italic,300,900,700,900italic,300italic">
	<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Montserrat:400,700">

	<!-- stylesheets -->
	<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
	<link href="/src/vendor/bootstrap/dist/css/bootstrap.min.css" type="text/css" rel="stylesheet">
	<link href="/src/vendor/slick-carousel/slick/slick.css" type="text/css" rel="stylesheet">
	<link href="/src/vendor/ngprogress-lite/ngprogress-lite.css" type="text/css" rel="stylesheet">
	<link href="/assets/css/dashboard.min.css" type="text/css" rel="stylesheet">
	
	<!-- favicon -->
	<link type="image/png" rel="shortcut icon" href="/assets/img/favicon.png">

	<base href="/">
</head>

<body>
	<div ui-view></div>
	
	<!-- Scripts -->
	<script type="text/javascript" src="/assets/js/dashboard-libs.js"></script>
	<script type="text/javascript" src="/assets/js/dashboard-build.js"></script>
</body>
</html>