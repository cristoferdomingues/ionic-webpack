import angular from 'angular';
import routing from './router';

import ExploreCtrl from './controller/ExploreCtrl';
import SettingsCtrl from './controller/SettingsCtrl';
import MatchesCtrl from './controller/MatchesCtrl';
import MessagingCtrl from './controller/MessagingCtrl';


export default angular.module('home', [])
  .config(routing)
  .controller('ExploreCtrl', ExploreCtrl)
  .controller('SettingsCtrl', SettingsCtrl)
  .controller('MatchesCtrl', MatchesCtrl)
  .controller('MessagingCtrl', MessagingCtrl)
  .name;
