import welcomeTemplate from './welcome.view.html';

import WelcomeCtrl from './welcome.ctrl';

export default function routing($stateProvider) {
  'use strict';
  $stateProvider
    .state('welcome', {
      url: '/welcome',
      template: welcomeTemplate,
      controller: WelcomeCtrl,
      controllerAs: '$ctrl'
    });

}
routing.$inject = ['$stateProvider'];
