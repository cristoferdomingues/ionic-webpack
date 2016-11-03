import angular from 'angular';
import routing from './welcome.router';
import WelcomeCtrl from './welcome.ctrl';

export default angular.module('welcome', [])
  .config(routing)
  .controller('WelcomeCtrl', WelcomeCtrl)
  .name;
