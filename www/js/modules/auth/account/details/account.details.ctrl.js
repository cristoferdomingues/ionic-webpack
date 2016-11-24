let self;
let loginType = {
  'STUDENT': {
    state: 'home.challenges'
  },
  'RECRUITER': {
    state: 'home.explore'
  },
  'PROFESSOR': {
    state: 'home.explore'
  }
};

export default class AccountDetailsCtrl {
  constructor($ionicLoading, $timeout, $state) {
    self = this;
    this.$ionicLoading = $ionicLoading;
    this.$timeout = $timeout;
    this.$state = $state;
  }

  login(type) {
    self.$ionicLoading.show({
      template: '<ion-spinner></ion-spinner>'
    });

    self.$timeout(function() {
      self.$ionicLoading.hide();
      self.$state.go(loginType[type].state);
    }, 2000);
  }
}

AccountDetailsCtrl.$inject = ['$ionicLoading', '$timeout', '$state'];
