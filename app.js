! function(window, angular) {
  'use strict';
  angular.module('staticContent', [])
  .provider('uiDirectiveConfig',[ '$provide', function ($provide) {

    this.dataUrl = null;

    this.setUrl = function(url) {
      this.dataUrl = url;
    },

    this.$get = ['$http', function ($http) {
      var promise = $http({
        method: "get",
        url: this.dataUrl
      });
      return promise;

    }];

  }])
  .directive("ghStatic", function(){
    return {
      restrict: 'E',
      scope: { itemData:  '=' },
      templateUrl: function(elem, attr){
        return attr.template + '.html';
      },
      replace:true
    };
  });

}(window, window.angular);
