var myApp = angular.module('myApp');

myApp.controller('ContactsController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
    console.log('ContactsController loaded...');

        $scope.getContacts = function() {
            $http.get('/api/contacts').success(function(response) {
                $scope.contacts = response;
            });
        };

        $scope.getContact = function() {
            var id = $routeParams.id;   //get id มา
            $http.get('/api/contacts/'+id).success(function(response) {
                $scope.contact = response;
            });
        };
        $scope.addContact = function() {
            console.log($scope.contact);
            $http.post('/api/contacts/', $scope.contact).success(function(response) {
                window.location.href='#/contacts';
                $.smkAlert({ text: "success insert", type:'success', position:'bottom-right'});
            });
        };
        $scope.updateContact = function() {
            var id = $routeParams.id;
            $http.put('/api/contacts/'+id, $scope.contact).success(function(response) {
                window.location.href='#/contacts';
                $.smkAlert({ text: "success update", type:'warning', position:'bottom-right'});
            });
        };
        $scope.removeContact = function(id) {
            $http.delete('/api/contacts/'+id).success(function(response) {
                window.location.href='#/contacts';
                $('#myModal').modal('hide');
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
            });
        };
}]);