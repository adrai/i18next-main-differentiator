
if (window.i18next) {
	window.i18next
		.use(window.i18nextXHRBackend)
		.use(window.i18nextBrowserLanguageDetector)
		.init({
			debug: false,
			fallbackLng: 'en',
			backend: {
				loadPath: '../locales/{{lng}}/{{ns}}.json'
			},
			ns: ['translations'],
			defaultNS: 'translations'
		}, function (err, t) {
			console.log('resources loaded');
		}
	);
}

angular.module('MyApp', ['jm.i18next']).controller('MyDirectiveCtrl', function ($rootScope, $scope, $timeout, $i18next, $filter) {

	'use strict';

	$scope.i18nextReady = false;

	$scope.$on('i18nextLanguageChange', function () {
		console.log('Language has changed!');
		if (!$scope.i18nextReady) {
			$timeout(function () {
				$scope.i18nextReady = true;
			}, 500);
		}
	});

	$scope.changeLng = function (lng) {
		$i18next.changeLanguage(lng);
	};

});
