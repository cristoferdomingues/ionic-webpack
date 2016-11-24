function AppRouter($urlRouterProvider) {
  'use strict';

  $urlRouterProvider.otherwise('/account-create');
}

export default AppRouter;
