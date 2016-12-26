angular.module('sisepDevApp')
	.factory('loginFac', function() {
 var userData = {}
 function setUser(data) {
   userData = data;
 }
 function getUser() {
  return userData;
 }

 return {
  setUser: setUser,
  getUser: getUser
 }

});