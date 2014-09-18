app.config(function ($stateProvider) {
	var state = {
		name: 'colleges-and-admissions.colleges',
		url: '/colleges/{id}',
		templateUrl: '/src/main/components/colleges-and-admissions/colleges/tpl.html',
		data: {
			title: 'Colleges',
			title: 'Colleges',
		}
	};

	$stateProvider.state(state);
});