'use strict';

/* Services */

angular.module('myApp.services', [])

.factory('InstagramToken', [function() {
  var token;
  return function(tkn){
    if(tkn){
      token = localStorage['token'] = tkn;
    }else{
      if(!token && localStorage['token']){
        token = localStorage['token'];
      }
    }
    return token;
  }
}]);