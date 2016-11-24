import angular from 'angular';

import Welcome from './welcome';

import Home from './home';

import Account from './auth/account';



export default angular.module('modules', [Home, Welcome, Account])
  .name;
