var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider.when('/',{
        controller:'ContactsController',
        templateUrl:'views/contacts.html'
    })
        .when('/contacts',{
            controller:'ContactsController',
            templateUrl:'views/contacts.html'
        })
        .when('/contacts/detail/:id',{
            controller:'ContactsController',
            templateUrl:'views/contact_detail.html'
        })
        .when('/contacts/add',{
            controller:'ContactsController',
            templateUrl:'views/add_contact.html'
        })
        .when('/contacts/edit/:id',{
            controller:'ContactsController',
            templateUrl:'views/edit_contact.html'
        })
        .when('/contacts/about',{
            controller:'ContactsController',
            templateUrl:'views/about.html'
        })
        .otherwise({
            redirectTo: '/'
        })
});