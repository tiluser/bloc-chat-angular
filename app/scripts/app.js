/*
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
  */

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
                views: {

                  '': {
                      templateUrl: '/templates/home.html',
                      controller: 'HomeCtrl as home'
                  },
                  'master': {
                      templateUrl: '/templates/home.html',
                      controller: 'HomeCtrl as home'
                  },
                  'detail': {
                      templateUrl: '/templates/roominfo.html',
                      controller: 'HomeCtrl as home'
                  },
                  'detail/:$id': {
                      templateUrl: '/templates/roominfo.html',
                      controller: 'DetailCtrl as detail'
                  }
                }
            });
         }

      angular
          .module('blocChat', ['ui.router', 'firebase'])
          .config(config);
  })();
