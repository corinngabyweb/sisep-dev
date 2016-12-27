angular
  .module('sisepDevApp')
  .run(["$rootScope", function($rootScope){
      $rootScope.$on('$stateChangeStart', 
      function(event, toState, toParams, fromState, fromParams){ 
          $rootScope.stateIsLoading = true;
      })

      $rootScope.$on('$stateChangeSuccess', 
      function(event, toState, toParams, fromState, fromParams){
          $rootScope.stateIsLoading = false;
      })
    }
  ])
  .config(["$routeProvider", "$stateProvider", "$urlRouterProvider",
    function ($routeProvider, $stateProvider, $urlRouterProvider) {
      
      $stateProvider
        .state('index', {
            abstract: true,
            //url: '/',
            views: {
              '@' : {
                templateUrl: 'common/layout/logged.html'
              },
              'top@index' : { templateUrl: 'common/layout/header.html',},
              'left@index' : { templateUrl: 'common/navigation/navigation.html',},
              'main@index' : { templateUrl: 'common/layout/main-data.html',},
            },
          })
        .state('inicio', {
            url: '/inicio',
            parent: 'index',
            views: {
              'detail@index' : {
                templateUrl: 'views/dashboards/dashboard.html'
              }
            }   
          })        
        
        .state('listar_associado', { //Rota-referência
            url: '/listar_associado',
            parent: 'index',
            views: {
              'detail@index' : {
                templateUrl: 'views/associado/listar.html'
              }
            }   
          })
        .state('add_associado', { //Rota-referência
            url: '/add_associado',
            parent: 'index',
            views: {
              'detail@index' : {
                templateUrl: 'views/associado/cadastrar.html'
              }
            }   
          })

        //----------------------------------------------------------------------------
        .state('auth', {
            abstract: true,
            url: '/auth',
            views: {
              '@' : {
                templateUrl: 'common/layout/auth.html'
              }
            },
          })
        .state('login', {
            parent: 'auth',
            url: '/login',
            views: {
              'full@auth' : {
                templateUrl: 'modules/login/login.html'
              }
            }   
        })
        .state('locked', {
            parent: 'auth',
            url: '/locked',
            views: {
              'full@auth' : {
                templateUrl: 'modules/login/locked.html'
              }
            }   
        })
    $urlRouterProvider.otherwise('/auth/login');
      
    } 
  ]);
