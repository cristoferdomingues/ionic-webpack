export default class WelcomeCtrl {
  constructor($state, $ionicLoading, $timeout) {
    this.$state = $state;
    this.$ionicLoading = $ionicLoading;
    this.$timeout = $timeout;
  }

  login() {
    let _self = this;
    this.$ionicLoading.show({
      template: '<ion-spinner></ion-spinner>'
    });

    this.$timeout(function() {
      _self.$ionicLoading.hide();
      _self.$state.go('home.explore');
    }, 2000);
  }
}

WelcomeCtrl.$inject = ['$state', '$ionicLoading', '$timeout'];
