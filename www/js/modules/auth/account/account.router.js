export default function routing($stateProvider) {
  'use strict';
  $stateProvider
    .state('account-create', {
      url: '/account-create',
      template: '<account-create></account-create>'
    })

  .state('account-details', {
    url: '/account-details',
    template: '<account-details></account-details>'
  })

  ;
}
routing.$inject = ['$stateProvider'];
