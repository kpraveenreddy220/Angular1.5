var app = angular.module("test", ["ngRoute"]);

app.config(function ($routeProvider) {
    
	$routeProvider
    
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/login", {
        templateUrl : "src/Login.html",
        controller : "login"
    })
    .otherwise ({
    	
    	redirectTo : "/"
    	
    });   
    });

	


app.controller('login', function ($scope){
	
	$scope.msg = "You logged in";
		
});