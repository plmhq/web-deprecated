app.config(function ($stateProvider) {
	var state = {
		name: 'colleges-and-admissions.admissions',
		url: '/admissions/{id}',
		templateUrl: '/src/main/components/colleges-and-admission/admissions/tpl.html',
		data: {
			title: 'Admissions',
			title: 'Admissions',
		}
	};

	$stateProvider.state(state);
});