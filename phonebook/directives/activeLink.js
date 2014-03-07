
app.directive('activeLink', ['$location', function(location) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var clazz = attrs.activeLink;
            var path = attrs.href;

            scope.location = location;
      
            scope.$watch('location.path()', function(newPath) {
            	
                newPath = newPath.substring(1); 
                if (path === newPath) {
                    element.parent().addClass(clazz);
                } else {
                    element.parent().removeClass(clazz);
                }
            });
        }

    };
}]);