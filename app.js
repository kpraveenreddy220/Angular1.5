var app = angular.module("App", ['ngRoute']);


app.config(function ($routeProvider){								//adding routes to different views 
    $routeProvider
    .when('/welcome',
    	    {
    	        templateURL: 'Welcome.html'

    	    }
    .when('/login',
    {
        controller: 'Login',
        templateURL: 'src/Login.html'

    }
    )
    .when('/register',
    {
        controller: 'Register',
        templateURL: 'src/Register.html'

    })
      .when('/contact',
    {
        controller: 'Contact',
        templateURL: 'src/Contact.html'
    })
    .otherwise({ redirectTo: '/'});
});

	
var controllers = {}; // common variable for multiple controllers I want to use.

controllers.Login = function ($scope){
	
	// this is for login controller
	
	
}

controllers.Register = function ($scope){
	
	// this is for Register controller
	
	
}
controllers.Contact = function ($scope){
	
	// this is for Contact controller
	
	
}

app.controller(controllers);