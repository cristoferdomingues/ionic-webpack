let _self;

export default class RedeemCuponCtrl {
  constructor($ionicLoading, $timeout, $state) {
    _self = this;
    this.$timeout = $timeout;
    this.$ionicLoading = $ionicLoading;
    this.$state = $state;
  }

  cancel() {
    _self.$ionicLoading.show({
      template: '<ion-spinner></ion-spinner>'
    });

    _self.$timeout(function() {
      _self.$ionicLoading.hide();
      _self.$state.go('home.explore');
    }, 2000);
  }
}

RedeemCuponCtrl.$inject = ['$ionicLoading', '$timeout', '$state'];
