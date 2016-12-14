angular
  .module('sisepDevApp')
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
                templateUrl: 'app/views/pages/signin.html'
              }
            }   
        })
    $urlRouterProvider.otherwise('/inicio');
      /*return $routeProvider.when("/", {
        redirectTo: "/dashboard"
      }).when("/dashboard", {
        templateUrl: "app/views/dashboards/dashboard.html"
      }).when("/dashboard/dashboard1", {
        templateUrl: "app/views/dashboards/dashboard1.html"
      }).when("/dashboard/dashboard2", {
        templateUrl: "app/views/dashboards/dashboard2.html"
      }).when("/ui/typography", {
        templateUrl: "app/views/ui_elements/typography.html"
      }).when("/ui/buttons", {
        templateUrl: "app/views/ui_elements/buttons.html"
      }).when("/ui/cards", {
        templateUrl: "app/views/ui_elements/cards.html"
      }).when("/ui/material-icons", {
        templateUrl: "app/views/ui_elements/icons.html"
      }).when("/ui/grids", {
        templateUrl: "app/views/ui_elements/grids.html"
      }).when("/ui/widgets", {
        templateUrl: "app/views/ui_elements/widgets.html"
      }).when("/ui/material-design", {
        templateUrl: "app/views/ui_elements/material.html"
      }).when("/ui/nested-lists", {
        templateUrl: "app/views/ui_elements/nested-lists.html"
      }).when('/ui/color', {
        templateUrl: "app/views/ui_elements/color.html"
      }).when("/forms/elements", {
        templateUrl: "app/views/forms/elements.html"
      }).when("/forms/layouts", {
        templateUrl: "app/views/forms/layouts.html"
      }).when("/forms/validation", {
        templateUrl: "app/views/forms/validation.html"
      }).when("/forms/wizard", {
        templateUrl: "app/views/forms/wizard.html"
      }).when("/maps/gmap", {
        templateUrl: "app/views/maps/gmap.html"
      }).when("/maps/jqvmap", {
        templateUrl: "app/views/maps/jqvmap.html"
      }).when("/tables/static", {
        templateUrl: "app/views/tables/static.html"
      }).when("/tables/responsive", {
        templateUrl: "app/views/tables/responsive.html"
      }).when("/tables/dynamic", {
        templateUrl: "app/views/tables/dynamic.html"
      }).when("/charts/others", {
        templateUrl: "app/views/charts/charts.html"
      }).when("/charts/morris", {
        templateUrl: "app/views/charts/morris.html"
      }).when("/charts/chartjs", {
        templateUrl: "app/views/charts/chartjs.html"
      }).when("/charts/flot", {
        templateUrl: "app/views/charts/flot.html"
      }).when("/pages/features", {
        templateUrl: "app/views/pages/features.html"
      }).when("/pages/signin", {
        templateUrl: "app/views/pages/signin.html"
      }).when("/pages/signup", {
        templateUrl: "app/views/pages/signup.html"
      }).when("/pages/forgot", {
        templateUrl: "app/views/pages/forgot-password.html"
      }).when("/pages/profile", {
        templateUrl: "app/views/pages/profile.html"
      }).when("/404", {
        templateUrl: "app/views/pages/404.html"
      }).when("/pages/500", {
        templateUrl: "app/views/pages/500.html"
      }).when("/pages/contact", {
        templateUrl: "app/views/pages/contact.html"
      }).when("/tasks", routeTasksConfig)
        .when('/tasks/:status', routeTasksConfig)
        .otherwise({
        redirectTo: "/404"
      });*/
    }
  ]);
