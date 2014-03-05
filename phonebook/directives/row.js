

app.directive('row', function(){
	return {
		replace:true,
		template:
		'<tr>'+
			'<td>{{$index+1}}</td><td>{{user.name}}</td>'+
			'<td>{{user.phone}}</td><td><i class="fa fa-times" ng-click="remove($index)"></i>  <a href="edit/{{$index}}"><i class="fa fa-pencil-square-o"></i></a></td>'+
		'</tr>'
	}
});