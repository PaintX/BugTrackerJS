/*
 * Created on Tue Nov 08 2016
 *
 * Copyright (c) 2016 Sylvain LERIS - Y3S SAS
 */
var routes =
{
   'index': {
		url: '/',
		controller: 'index',
		view: 'index_body',
	},
	'login' : {
		url: '/login_page',
		controller: 'login',
		view: 'login_body',	
	},
	'login_post' : 
	{
		url: '/login_password_page',
		controller: 'login',
		view: 'login_body',	
	},
}

module.exports = routes;