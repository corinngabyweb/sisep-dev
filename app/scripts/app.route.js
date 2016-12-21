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
        var routeTasksConfig = {
        controller: 'TodoCtrl',
        templateUrl: "app/components/tasks/tasks.html",
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          }
        }
      };

      $stateProvider
        .state('index', {
            abstract: true,
            //url: '/',
            views: {
              '@' : {
                templateUrl: 'app/common/layout/logged.html'
              },
              'left@index' : { templateUrl: 'app/common/navigation/navigation.html',},
              'main@index' : { templateUrl: 'app/common/layout/main-data.html',},
            },
          })
        .state('inicio', {
            url: '/inicio',
            parent: 'index',
            views: {
              'detail@index' : {
                templateUrl: 'app/views/dashboards/dashboard.html'
              }
            }   
          })        
        
        .state('listar_associado', { //Rota-referência
            url: '/listar_associado',
            parent: 'index',
            views: {
              'detail@index' : {
                templateUrl: 'app/views/associado/listar.html'
              }
            }   
          })
        .state('add_associado', { //Rota-referência
            url: '/add_associado',
            parent: 'index',
            views: {
              'detail@index' : {
                templateUrl: 'app/views/associado/cadastrar.html'
              }
            }   
          })

        //----------------------------------------------------------------------------
        .state('auth', {
            abstract: true,
            url: '/auth',
            views: {
              '@' : {
                templateUrl: 'app/common/layout/auth.html'
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
    $urlRouterProvider.otherwise('/inicio');
      
    }
  ]);
