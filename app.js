angular.module('uiDirective', [])
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
.directive("testimonials", function(){
  return {
    restrict: 'E',
    scope: true,
    controller: function($scope, uiDirectiveConfig) {
      $scope.itemData = {
        testimonials:null,
        sliderInterval:null
      };
      uiDirectiveConfig.success(function(response){
        $scope.itemData.testimonials = response.testimonials;
        $scope.itemData.sliderInterval = response.sliderConfig.interval;
      })
    },
    templateUrl: function(elem, attr){
      return attr.template + '.html';
    },
    replace:true
  };
})

.directive("pressRelease", function(){
  return {
    restrict: 'E',
    scope: true,
    controller: function($scope, uiDirectiveConfig) {
      $scope.itemData = {
        releases:null
      };
      uiDirectiveConfig.success(function(response){
        $scope.itemData.releases = response.news;
      })
    },
    templateUrl: function(elem, attr){
      return attr.template+'.html';
    },
    replace:true
  };
});



