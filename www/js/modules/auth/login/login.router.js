import loginTemplate from './login.view.html';

import LoginCtrl from './login.ctrl';

export default function routing($stateProvider) {
  'use strict';
  $stateProvider
    .state('login', {
      url: '/login',
      template: loginTemplate,
      controller: LoginCtrl,
      controllerAs: '$ctrl'
    });

}
routing.$inject = ['$stateProvider'];
