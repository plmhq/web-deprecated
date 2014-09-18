app.config(function ($stateProvider) {
	var state = {
		name: 'colleges-and-admissions.index',
		url: '/colleges-and-admissions',
		templateUrl: '/src/main/components/colleges-and-admissions/index/tpl.html',
		data: {
			title: 'Colleges and Admissions',
			rawTitle: 'Colleges and Admissions'
		}
	};

	$stateProvider.state(state);
});