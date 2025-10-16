let myApp = angular.module("testApp", []);

myApp.controller("indexCtrl", function($scope) {

  $scope.greeting = "Hola Mundo";

  $scope.speeds = [12,34,45,666,66,5,3];

  $scope.residueTypes = //[];
   [{"abbr":"SOL","name":"SOLIDOS","unitMeasurement":"Tn","description":"sadf asdfa sfasdf asf","id":2,"$$hashKey":"object:23"},{"abbr":"SSO","name":"SEMI SOLIDOS","unitMeasurement":"Gr","description":"asf sadfsafasfd","id":3,"$$hashKey":"object:31"},{"abbr":"GAS","name":"GASEOSOS","unitMeasurement":"Gl","description":"asdfsa fasf asdf","id":4,"$$hashKey":"object:45"}];
  $scope.newResidueType = undefined;


  $scope.unitMeasurements = ["Gr", "Kg", "Tn", "Lt", "Gl"];

  console.log($scope.residueTypes);
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
    {
      id: "residue_type",
      name: "Tipo de Residuo",
      icon: "fas fa-box"
    },
  ];

  $scope.itemSelected = undefined;

  $scope.selectItem = (item) => {
    $scope.itemSelected = item;
  }

  $scope.toggleResidueType = (item = undefined) => {
    // Valida si existe el objeto Nuevo Tipo de Residuo
    if ($scope.newResidueType) {
      // Lo limpia y deja vacio.
      $scope.newResidueType = undefined;
    } else {
      // Lo crea como objeto
      $scope.newResidueType = {};
      // Si existe el item (parametro)
      if (item) {
        // Asigna el valor de Item a Nuevo Tipo de Residuo
        $scope.newResidueType = JSON.parse(JSON.stringify(item));
        // $scope.newResidueType = item;
      }
    }
  }

  $scope.addResidueType = () => {
    if ($scope.newResidueType.id) {
      // ACTUALIZANDO
      // Indice del array para actualizar
      let indexToUpdate = $scope.residueTypes.indexOf($scope.residueTypes.find(r => r.id === $scope.newResidueType.id));
      // Reemplazando en el lugar del indice el valor de nuevoTipoDeResiduo
      $scope.residueTypes[indexToUpdate] = JSON.parse(JSON.stringify($scope.newResidueType));
      // residueTypeFound = $scope.newResidueType;
    } else {
      // CREANDO
      // Añade propiedad id al objeto a agregar
      $scope.newResidueType.id = $scope.residueTypes.length + 1;
      // Agrega al array
      $scope.residueTypes.push($scope.newResidueType);
    }
    console.log($scope.residueTypes);
    // Si esta visible el formulario lo cierra.
    $scope.toggleResidueType();
    alert("Se guardaron los cambios");
  }

  $scope.deleteResidueType = (index) => {
    let choice = confirm("¿Estás seguro de eliminar el item?");
    if (choice) {
      $scope.residueTypes.splice(index, 1);
      alert("Se elimino el item");
    }
  }

});