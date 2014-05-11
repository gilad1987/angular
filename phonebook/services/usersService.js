

app.factory('usersServies', function($cookies, $cookieStore){
	var users = ($cookieStore.get('users') && $cookieStore.get('users').users) ? $cookieStore.get('users').users : [];

	return {
		users:users
	}
});

