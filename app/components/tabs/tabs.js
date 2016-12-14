angular.module('app.tabs', ['ngMaterial', 'ngMessages'])
  .controller('TabsDemoCtrl',
  function ($scope, $log) {
    var tabs = [
      {
        title: 'Informações Principais', 
        cont: 'app/views/associado/tab-info_principais.html'
      },
      {
        title: 'Informações de Contato', 
        cont: 'app/views/associado/tab-info_contato.html'
      }
    ];
    $scope.tabs = tabs;
    $scope.selectedIndex = 1;
    
    $scope.addTab = function (title, view) {
      view = view || title + " Content View";
      tabs.push({title: title, cont: view, disabled: false});
    };
    $scope.removeTab = function (tab) {
      for (var j = 0; j < tabs.length; j++) {
        if (tab.title == tabs[j].title) {
          $scope.tabs.splice(j, 1);
          break;
        }
      }
    };
  })
  .controller('StaticTabsDemoCtrl',
  function ($scope) {
    $scope.data = {
      selectedIndex: 0,
      secondLocked: true,
      secondLabel: "Item Two",
      bottom: false
    };
    $scope.max = 4;
    $scope.selectedIndex = 0;
    $scope.nextTab = function() {
      var index = ($scope.selectedIndex == $scope.max) ? 0 : $scope.selectedIndex + 1;
      $scope.selectedIndex = index;

    };
    $scope.next = function () {
      $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2);
    };
    $scope.previous = function () {
      $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };
  });