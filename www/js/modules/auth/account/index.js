import angular from 'angular';
import routing from './account.router';
import CreateComponent from './create';
import DetailsComponent from './details';

export default angular.module('account', [CreateComponent, DetailsComponent])
  .config(routing)
  .name;
