let myApp = angular.module("testApp", []);

myApp.controller("indexCtrl", function($scope) {

  $scope.greeting = "Hola Mundo";

  $scope.speeds = [12,34,45,666,66,5,3];

  $scope.menu = [
    {
      id: "company",
      name: "Empresas",
      icon: "fas fa-building"
    },
    {
      id: "user",
      name: "Usuarios",
      icon: "fas fa-user"
    },
    {
      id: "company_type",
      name: "Tipos de Empresa",
      icon: "fas fa-building"
    },
    {
      id: "residue",
      name: "Residuos",
      icon: "fas fa-box"
    },
  ];

  $scope.itemSelected = undefined;

  $scope.selectItem = (item) => {
    $scope.itemSelected = item;
  }

});