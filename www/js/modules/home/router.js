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
  });
}
routing.$inject = ['$stateProvider'];
