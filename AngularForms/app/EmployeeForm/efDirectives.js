angularFormsApp.directive('employeeForm', //camel case  diventa employee-form
    function () {
        return {
            restrict: 'E', //only element
            templateUrl: '/app/EmployeeForm/efTemplate.html'
        }
    });