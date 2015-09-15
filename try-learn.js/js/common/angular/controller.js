angular.module('ngApp', []).controller('PhoneListCtrl',
    function($scope) {
        $scope.phones = [{
            "name": "小明",
            "phone": "（029）-12345678"
        }, {
            "name": "李雷",
            "phone": "13892656362"
        }, {
            "name": "韩梅梅",
            "phone": "13653265364"
        }];
    }
);
