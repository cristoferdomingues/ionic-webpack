import angular from 'angular';

import AccountCreateComponent from './account.create.component';

export default angular.module('account.create', [])
  .component('accountCreate', AccountCreateComponent)
  .name;
