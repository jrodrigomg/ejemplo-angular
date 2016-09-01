
//Aplicación definida en el ejemplo.html
angular.module('app',['720kb.datepicker'])

//controlador definido también en el ejemplo.html
.controller('controlador', function($scope){

	//Array de productos ingresados
	$scope.productos = [];

	//salida del formulario
	$scope.producto = {};

	var midone = "";
	$scope.ingresarProducto= function(){
		$scope.producto.done = midone;
		$scope.productos.push($scope.producto);
		$scope.producto = {};
		if(midone ===""){
			midone ="todo-done";
		}else{
			midone  = "";
		}
	};
})