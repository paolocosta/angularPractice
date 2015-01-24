angularFormsApp.controller('efController',
    function efController($scope, $window, $routeParams, DataService) {

        if ($routeParams.id)
            $scope.employee = DataService.getEmployee($routeParams.id);
        else
            $scope.employee = { id: 0 };

        $scope.departments = [
            'development',
            'finance',
            'sales'
        ];

        $scope.editableEmployee = angular.copy($scope.employee);

        $scope.submitForm = function ()
        {
            if ($scope.editableEmployee.id == 0)
            {
                DataService.insertEmployee($scope.editableEmployee);
            }
            else
            {
                DataService.updateEmployee($scope.editableEmployee);
            }
            $scope.employee = angular.copy($scope.editableEmployee);
            console.log($scope.employee);
            $window.history.back();
        }

        $scope.cancelForm = function () {
            console.log("cancel");
        }
    });