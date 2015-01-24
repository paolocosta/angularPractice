angularFormsApp.factory('DataService',
    function () {
        var getEmployee = function (id) {
            if (id == 123) {
                return {

                    fullName: "Paolo Costa",
                    notes: "Voglio stare a casa",
                    department: "development",
                    perkCar: true,
                    perkStok: false,
                    perkSixWeeks: true,
                    payrollType: "none"
                };
            }
            return undefined;
        }
        var insertEmployee = function (newEmployee) {
            return true;
        }

        var updateEmployee = function (newEmployee) {
            return true;
        }

        return {
            insertEmployee: insertEmployee,
            updateEmployee: updateEmployee,
            getEmployee: getEmployee
        }


    });