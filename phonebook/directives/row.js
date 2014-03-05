

app.directive('row', function(){
	return {
		replace:true,
		template:'<tr><td>{{user.id}}</td><td>{{user.name}}</td><td>{{user.phone}}</td></tr>'
	}
});