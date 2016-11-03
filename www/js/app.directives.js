'use strict';
import angular from 'angular';



function noScroll() {
  return {
    restrict: 'A',
    link: function($scope, $element) {
      $element.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  };
}

function photoPickable() {
  return {
    restrict: 'AE',
    scope: {
      number: '@',
      imgSrc: '='
    },
    template: '' +
      '<div class="photo-pickable" ng-click="pick()">' +
      '<span class="photo-number text-lg light">{{number}}</span>' +
      '<img ng-src="{{imgSrc}}" class="w-full r-3x" alt="">' +
      '<i class="icon ion-close-round photo-button assertive light-bg text-2x rounded"></i>' +
      '<i class="icon ion-plus-circled photo-button assertive light-bg text-2x rounded"></i>' +
      '</div>',
    controller: function($scope, $cordovaCamera) {
      var options;
      $scope.imgSrc = 'img/ben.png';

      document.addEventListener('deviceready', function() {
        options = {
          quality: 80,
          destinationType: Camera.DestinationType.FILE_URI,
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
          mediaType: Camera.MediaType.PICTURE,
          allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 640,
          targetHeight: 640,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false,
          correctOrientation: true
        };
      });

      $scope.pick = function() {
        if (Camera === undefined) return false;

        $cordovaCamera.getPicture(options)
          .then(function(imageData) {
            // $scope.imgSrc = "data:image/jpeg;base64," + imageData;
            $scope.imgSrc = imageData;
          }, function(err) {
            console.log('photoPickable -- Error', err);
          });
      };
    }
  };
}



export default angular.module('app.directives', [])
  .directive('noScroll', noScroll)
  .directive('photoPickable', photoPickable)
  .name;
