'use strict';


function bindModalEvts($scope) {
  $scope.closeSettingsModal = function() {
    $scope.modalSettings.hide();
  };
}

export default class SettingsCtrl {
  constructor($scope, $ionicModal) {
    let _self = this;
    _self.$scope = $scope;
    _self.$scope.modalSettings = $ionicModal.fromTemplate(require('../tpl/modals/settings.html'), {
      scope: _self.$scope,
      animation: 'slide-in-up'
    });

    bindModalEvts(_self.$scope);
  }

  openSettingsModal() {
    this.$scope.modalSettings.show();
  }
}

SettingsCtrl.$inject = ['$scope', '$ionicModal'];
