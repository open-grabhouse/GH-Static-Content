angular.module('myApp', ['uiDirective', 'ui.bootstrap'])
  .config(function(uiDirectiveConfigProvider){
  uiDirectiveConfigProvider.setUrl('data.json');
})
