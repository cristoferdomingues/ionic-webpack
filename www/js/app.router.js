function AppRouter($urlRouterProvider) {
  'use strict';

  $urlRouterProvider.otherwise('/welcome');
}

export default AppRouter;
