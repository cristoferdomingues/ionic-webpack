let self;

export default class AccountCreateCtrl {
  constructor($state, $ionicLoading, $timeout) {
    self = this;
    this.$state = $state;
    this.$ionicLoading = $ionicLoading;
    this.$timeout = $timeout;
  }

  login() {
    self.$ionicLoading.show({
      template: '<ion-spinner></ion-spinner>'
    });

    self.$timeout(function() {
      self.$ionicLoading.hide();
      self.$state.go('account-details');
    }, 2000);
  }
}

AccountCreateCtrl.$inject = ['$state', '$ionicLoading', '$timeout'];
