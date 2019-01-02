var heatMap = angular.module('heatMap', []);

heatMap.directive('heatMapDir', [function(){
    return{
        restrict: 'C',
        scope: {
            title:  '=',
            },
        //template: '<h1>heatmap</h1>',
        templateUrl: 'heatmap/heatmap.html'
    };

}]);

heatMap.controller('heatMapController',[ '$scope', '$http', function($scope, $http){
    //get sample json file
    $http.get('data/currency.json').then(function(response){
    $scope.pairs = response.data;
    });
}]);
    
    
