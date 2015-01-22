angularFormsApp.controller('efController',
    function efController($scope, efService) {
        $scope.employee = efService.employee;
        $scope.departments = [
            'development',
            'finance',
            'sales'
        ];

        $scope.submitForm = function ()
        {
            alert(0);
        }
    });