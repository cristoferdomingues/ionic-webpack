export default function routing($stateProvider) {
  'use strict';


  $stateProvider
    .state('home', {
      url: '/home',
      abstract: true,
      template: require('./tpl/index.html')
    })

  .state('home.explore', {
    url: '/explore',
    template: require('./tpl/explore.html'),
    controller: 'ExploreCtrl',
    controllerAs: '$ctrl'
  })

  .state('home.settings', {
    url: '/settings',
    template: require('./tpl/settings.html'),
    controller: 'SettingsCtrl',
    controllerAs: '$ctrl'
  })

  .state('home.matches', {
    url: '/matches',
    template: require('./tpl/matches.html'),
    controller: 'MatchesCtrl',
    controllerAs: '$ctrl'
  })

  .state('home.messaging', {
    url: '/messaging/:id',
    template: require('./tpl/messaging.html'),
    controller: 'MessagingCtrl',
    controllerAs: '$ctrl'
  })

  .state('home.challenges', {
    url: '/challenges',
    template: require('./tpl/challenges.html'),
    controller: 'ChallengesCtrl',
    controllerAs: '$ctrl'
  })

  .state('home.studentSettings', {
    url: '/settings',
    template: require('./tpl/studentSettings.html'),
    controller: 'SettingsCtrl',
    controllerAs: '$ctrl'
  })

  .state('home.studentMessages', {
    url: '/studentMessages',
    template: require('./tpl/studentMessages.html'),
    controller: 'MatchesCtrl',
    controllerAs: '$ctrl'
  })

  .state('home.redeemCoupon', {
    url: '/redeemCoupon',
    template: require('./tpl/redeemCoupon.html'),
    controller: 'RedeemCouponCtrl',
    controllerAs: '$ctrl'
  })

  ;
}
routing.$inject = ['$stateProvider'];
