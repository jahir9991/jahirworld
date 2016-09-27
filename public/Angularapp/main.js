var app = angular.module('mainApp', []);

app.controller('portfolio', function ($scope) {
        $scope.data = "data";
        $scope.template = {
            experience: "views/experience.html",
            works: "views/works.html",
            blogs: "views/blogs.html",
            chat: "views/chat.html"
        };

        $scope.temp = $scope.template.experience;

        $scope.try = function () {
            classie.remove(splitlayout, 'close-right');
            classie.remove(splitlayout, 'close-left');
            classie.remove(splitlayout, 'reset-layout');
            classie.add(splitlayout, 'open-left');

        }

        $scope.faceBook = function () {

            var _self = this;

            FB.Event.subscribe('auth.authResponseChange', function (res) {

                if (res.status === 'connected') {

                    /*
                     The user is already logged,
                     is possible retrieve his personal info
                     */
                    _self.getUserInfo();

                    /*
                     This is also the point where you should create a
                     session for the current user.
                     For this purpose you can use the data inside the
                     res.authResponse object.
                     */

                }
                else {

                    /*
                     The user is not logged to the app, or into Facebook:
                     destroy the session on the server.
                     */

                }

            });

        }


    }
)
