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
      name: 'Tênis feminino',
      description: '',
      image: 'img/products/produto01_1.jpg',
      like: false,
      notLike: false,
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSelXjdSNr_X-R_ZKj6j68VVChExnrV7FSWD4thJx6eKyW7Llg/viewform',
      price: 179.90,
      categories: ['Calçados femininos', 'Casual'],
        images: [
            {
               url: 'img/products/produto01_1.jpg'
            },
            {
               url: 'img/products/produto01_2.jpg'
            }
      ]      
   },
   {
      name: 'Tênis masculino',
      price: 149,
      description: '',
      image: 'img/products/produto02_1.jpg',
      like: false,
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSdJkBIU2S40tLp8p_ZzDfRkx5TdWCIH7h6j1Uc7TFfb5FdxYw/viewform',
      notLike: false,
      categories: ['Calçados masculinos', 'Casual', 'Tênis'],
        images: [
            {
               url: 'img/products/produto02_1.jpg'
            }
      ]          
   },
   {
      name: 'Vestido',
      price: 151.90,
      description: 'Tamanho P',
      image: 'img/products/produto03_1.jpg',
      like: false,
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSduRvvqdqyS3K5QMg8b8OGpxDI3Zpi3YardW28N22gsby6PyA/viewform',
      notLike: false,
      categories: ['Vestidos', 'Moda feminina'],
        images: [
            {
               url: 'img/products/produto03_1.jpg'
            }, 
            {
               url: 'img/products/produto03_2.jpg'
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

    