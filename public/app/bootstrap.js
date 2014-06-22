var path = '../assets/vendor/',

// Dependencies
jquery = require(path + "jquery/dist/jquery.min"),
bootstrap = require(path + "bootstrap/dist/js/bootstrap.min"),
angular = require(path + "angular/angular.min"),
ngResource = require(path + "angular-resource/angular-resource.min"),
uiRouter = require(path + "angular-ui-router/release/angular-ui-router.min"),
ngProgress = require(path + "ngprogress/build/ngProgress.min"),
ngTimer = require(path + "angular-timer/dist/angular-timer.min"),
ngSlick = require(path + "angular-slick/dist/slick.min"),
datejs = require(path + "datejs/build/date"),

// App
app = require("./app"),
components = require("./components/_index");

// Bootstrap
angular.element(document).ready(function() {
	angular.bootstrap(document, ['app']);
});