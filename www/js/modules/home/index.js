import angular from 'angular';
import routing from './router';

export default angular.module('home', [])
    .config(routing)
    .name;
