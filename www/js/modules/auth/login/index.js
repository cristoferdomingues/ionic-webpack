import angular from 'angular';
import routing from './login.router';
import LoginCtrl from './login.ctrl';

export default angular.module('login', [])
  .config(routing)
  .controller('LoginCtrl', LoginCtrl)
  .name;
