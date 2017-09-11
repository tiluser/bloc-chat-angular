
  (function () {
        function config($stateProvider, $locationProvider,$urlRouterProvider) {
             $locationProvider
                 .html5Mode({
                     enabled: true,
                     requireBase: false
                  });

            $stateProvider
                .state('home', {
                    url: '/',
                    controller: 'HomeCtrl as home',
                    templateUrl: '/templates/home.html'
                });
         }

      angular
          .module('blocChat', ['ui.router', 'firebase'])
          .config(config);
  })();
