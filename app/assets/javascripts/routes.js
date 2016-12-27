(function() {
    'use strict'

    angular
        .module('beachster')
        .config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {

            // State routes
            $stateProvider
                .state('home', {
                    url: '/',
                    views: {
                        nav: {
                            templateUrl: 'navbar/navbar.html'
                        },
                        content: {
                            templateUrl: 'home/home.html'
                        }
                    }
                })
                .state('beaches', {
                    url: '/beaches',
                    views: {
                        nav: {
                            templateUrl: 'navbar/navbar.html'
                        },
                        content: {
                            templateUrl: 'beaches/beaches.html'
                        }
                    }
                })
                .state('beaches.detail', {
                    url: '/beaches/:beachId',
                    templateUrl: 'beaches/detail.html',
                    controller: function($stateParams) {
                        console.log($stateParams)
                    }
                })


            // routes invalid routes to root url /
            $urlRouterProvider.otherwise('/')

            // remove # from url Routes
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });

        }])

}())
