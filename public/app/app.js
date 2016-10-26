angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){
	/*
	Variável responsável por guardar o valor se um usuário tem permissão de

	 */
  var routeRoleCheck = {
      admin: {
          auth: function (mvAuth) {
              return mvAuth.authorizeCurrentUserForRoute('admin');
          }
      }
  };

  $locationProvider.html5Mode(true);
	$routeProvider
		.when('/', {
			templateUrl: '/partials/main/main',
			controller: 'myMainCtrl'
		})
		.when('/admin/users', {
      templateUrl: '/partials/admin/user-list',
      controller: 'mvUserListCtrl',
      resolve: routeRoleCheck.admin
    })
		.when('/signup', {
			templateUrl: '/partials/account/signup',
			controller: 'mvSignupCtrl'
		})
});

angular.module('app').run(function ($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
    if(rejection === 'not authorized'){
      $location.path('/');
    }
  })
});