var app = angular.module('adminApp', []);
app.controller('loginController', function ($scope, $http) {
    var v = $scope;
    v.loginData = {
        username: "",
        password: ""
    };
    $scope.login = function () {

        $http.get('/login').then(function (data) {
            console.log(data);

        })
    }

})
