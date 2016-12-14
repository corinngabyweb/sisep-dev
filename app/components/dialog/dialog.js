angular.module("app.dialog",['ngMaterial', 'ngMessages'])
  .controller('DialogDemoCtrl',
  function ($scope, $mdDialog) {
    $scope.alert = '';
    $scope.showAlert = function (ev) {
      $mdDialog.show(
        $mdDialog.alert()
          .title('This is an alert title')
          .content('You can specify some description text in here.')
          .ariaLabel('Password notification')
          .ok('Got it!')
          .targetEvent(ev)
      );
    };
    $scope.showConfirm = function (ev) {
      var confirm = $mdDialog.confirm()
        .title('Would you like to delete your debt?')
        .content('All of the banks have agreed to forgive you your debts.')
        .ariaLabel('Lucky day')
        .ok('Please do it!')
        .cancel('Sounds like a scam')
        .targetEvent(ev);
      $mdDialog.show(confirm).then(function () {
        $scope.alert = 'You decided to get rid of your debt.';
      }, function () {
        $scope.alert = 'You decided to keep your debt.';
      });
    };
    $scope.showAdvanced = function (ev) {
      $mdDialog.show({
        controller: function ($scope, $mdDialog) {
          $scope.hide = function () {
            $mdDialog.hide(function(){

            });
          };
          $scope.cancel = function () {
            $mdDialog.cancel(function(){

            });
          };
          $scope.answer = function (answer) {
            $mdDialog.hide(answer);
          };
        },
        templateUrl: 'app/components/dialog/dialog1.tmpl.html',
        targetEvent: ev
      })
        .then(function (answer) {
          $scope.alert = 'You said the information was "' + answer + '".';
        }, function () {
          $scope.alert = 'You cancelled the dialog.';
        });
    };
  });