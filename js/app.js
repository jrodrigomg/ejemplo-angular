angular.module('app',[])
.controller('controlador',function($scope){
	$scope.productos = [];
	$scope.producto ={};
	$scope.ingresarProducto = function(){
		$scope.productos.push($scope.producto);
		$scope.producto = {};
	};

})