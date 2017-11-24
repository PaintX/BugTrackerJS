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
	'signup' : {
		url: '/signup_page',
		controller: 'signup',
		view: 'signup_body',
	}
}

module.exports = routes;