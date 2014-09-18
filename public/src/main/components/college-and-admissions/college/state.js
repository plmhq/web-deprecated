app.config(function ($stateProvider) {
	var state = {
		name: 'colleges-and-admissions.admissions',
		url: '/colleges',
		templateUrl: '/src/main/components/colleges-and-admission/colleges/tpl.html',
		data: {
			title: 'Colleges',
			title: 'Colleges',
		}
	};

	$stateProvider.state(state);
});