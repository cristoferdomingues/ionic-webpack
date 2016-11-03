import ExploreCtrl from './controller/ExploreCtrl';

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
    controller: ExploreCtrl,
    controllerAs: '$ctrl'
  })

  // .state('home.settings', {
  //     url: '/settings',
  //     template: require('./tpl/settings.html'),
  //     controller: 'SettingsCtrl'
  // })
  //
  // .state('home.matches', {
  //     url: '/matches',
  //     template: require('./tpl/matches.html'),
  //     controller: 'MatchesCtrl'
  // })
  //
  // .state('home.messaging', {
  //     url: '/messaging/:id',
  //     template: require('./tpl/messaging.html'),
  //     controller: 'MessagingCtrl'
  // })
  ;
}
routing.$inject = ['$stateProvider'];
