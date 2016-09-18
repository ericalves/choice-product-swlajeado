/**
 * INSPINIA - Responsive Admin Theme
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl() {

   this.products = [{
      name: 'Produto numero 1',
      description: 'Esse produto issso isso e aqui bla-bla...',
      imagem: '/img/products/1.jpg',
      like: false,
      notLike: false
   },
   {
      name: 'Produto numero 2',
      description: 'HUAH suhAns uA hsuhAUsesse produto issso isso e aqui bla-bla...',
      imagem: '/img/products/2.jpg',
      like: false,
      notLike: false
   }];

   this.currentProduct = 0;
};

function ProductsController($scope, $window) {

   $scope.products = [{
      name: 'Produto numero 1',
      description: 'Esse produto issso isso e aqui bla-bla...',
      image: '/img/products/1.jpg',
      like: false,
      notLike: false
   },
   {
      name: 'Produto numero 2',
      description: 'HUAH suhAns uA hsuhAUsesse produto issso isso e aqui bla-bla...',
      image: '/img/products/2.jpg',
      like: false,
      notLike: false
   }];

   $scope.currentProduct = 0;
   $scope.viewAll = function() {
      return ($scope.currentProduct) == ($scope.products.length);
   }

   $scope.netImage = function() {
      if ($scope.viewAll() == true) {
         console.log('fimmmm');
      } else {
         $scope.currentProduct++;
         console.log($scope.currentProduct);
      }
   };

   $scope.iLike = function() {
      $scope.products[$scope.currentProduct].like = true;
      $window.open('https://www.google.com', '_blank');

      $scope.netImage();
   };

   $scope.iNotLike = function() {
      $scope.products[$scope.currentProduct].notLike = true;

      $scope.netImage();
   };

   $scope.begin = function() {
      $scope.currentProduct = 0;
   };
};

angular
    .module('inspinia')
    .controller('MainCtrl', MainCtrl)
    .controller('ProductsController', ProductsController)