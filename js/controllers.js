/**
 * INSPINIA - Responsive Admin Theme
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl() {

};

function ProductsController($scope, $window, $uibModal) {

   $scope.products = [{
      name: 'Produto numero 1',
      description: 'Esse produto issso isso e aqui bla-bla...',
      image: 'https://ericalves.github.io/choice-product-swlajeado/img/products/1.jpg',
      like: false,
      url: 'https://www.google.com',
      notLike: false,
        images: [
            {
               url: 'https://ericalves.github.io/choice-product-swlajeado/img/products/1.jpg'
            },
            {
               url: 'https://ericalves.github.io/choice-product-swlajeado/img/products/2.jpg'
            },
            {
               url: 'https://ericalves.github.io/choice-product-swlajeado/img/products/1.jpg'
            }
      ]      
   },
   {
      name: 'Produto numero 2',
      description: 'HUAH suhAns uA hsuhAUsesse produto issso isso e aqui bla-bla...',
      image: 'https://ericalves.github.io/choice-product-swlajeado/img/products/2.jpg',
      like: false,
      url: 'https://www.google.com',
      notLike: false,
        images: [
            {
               url: 'https://ericalves.github.io/choice-product-swlajeado/img/products/2.jpg'
            },
            {
               url: 'https://ericalves.github.io/choice-product-swlajeado/img/products/1.jpg'
            },
            {
               url: 'https://ericalves.github.io/choice-product-swlajeado/img/products/2.jpg'
            }
      ]          
   }
   ];

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
      $window.open($scope.products[$scope.currentProduct].url, '_blank');

      $scope.netImage();
   };

   $scope.iNotLike = function() {
      $scope.products[$scope.currentProduct].notLike = true;

      $scope.netImage();
   };

   $scope.begin = function() {
      $scope.currentProduct = 0;
   };

    $scope.openProd = function (product) {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal_example1.html',
            controller: ModalInstanceCtrl,
            resolve: {
               params: {
                  prod: product
               }
            }
        });
    };   


};

function ModalInstanceCtrl ($scope, $uibModalInstance, params, $window) {

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    console.log('params', params);
    $scope.prod = params.prod;

    $scope.currentImg = 0;

    $scope.clickImage = function(idx) {
      $scope.currentImg = idx;
    }

    $scope.iWant = function() {
      $window.open($scope.prod.url, '_blank');
      $scope.cancel();
    }
};

angular
    .module('inspinia')
    .controller('MainCtrl', MainCtrl)
    .controller('ProductsController', ProductsController)
    .controller('ModalInstanceCtrl', ModalInstanceCtrl)

    