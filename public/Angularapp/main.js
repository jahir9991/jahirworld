var app = angular.module('mainApp', []);
app.controller('portfolio', function ($scope) {
        $scope.data = "data";


        $scope.template = {
            experience: "views/experience.html",
            works: "views/works.html",
            blogs: "views/blogs.html"
        };

        $scope.temp = $scope.template.experience;

        $scope.try = function () {
            classie.remove(splitlayout, 'close-right');
            classie.remove(splitlayout, 'close-left');
            classie.remove(splitlayout, 'reset-layout');
            classie.add(splitlayout, 'open-left');

        }

    }
)
