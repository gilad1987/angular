

app.directive('row', function(){
	return {
		replace:true,
		template:
		'<tr>'+
			'<td>{{$index+1}}</td><td>{{user.name}}</td>'+
			'<td><a href="tel:{{user.phone}}">{{user.phone}}</a></td>'+
            '<td class=\'text-center\'><i class="fa fa-times" ng-click="delete($index)"></i></td>'+
            '<td class=\'text-center\'><a href="update/{{$index}}">  <i class="fa fa-pencil-square-o"></i></a></td>'+
		'</tr>',
        compile: function() {
            return {
                pre: function() { 
                	//console.log("Prelink"); 
            	},
                post: function() { 
                	//console.log("post link"); 
                }
            };
        }
	}
});