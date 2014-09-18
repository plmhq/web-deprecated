app.config(function ($stateProvider) {
	var state = {
		parent: 'main',
		name: 'colleges-and-admissions',
		templateUrl: '/src/main/components/colleges-and-admissions/tpl.html',
		abstract: true
	};

	$stateProvider.state(state);
});