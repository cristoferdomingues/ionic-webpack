import angular from 'angular';

import Welcome from './welcome';

import Home from './home';


export default angular.module('modules', [Home, Welcome])
    .name;
