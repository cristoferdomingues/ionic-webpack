import angular from 'angular';

import AccountDetailsComponent from './account.details.component';

export default angular.module('account.details', [])
  .component('accountDetails', AccountDetailsComponent)
  .name;
