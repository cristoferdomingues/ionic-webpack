'use strict';

import angular from 'angular';

let cards = [{
    image: 'img/adam.jpg'
  },
  {
    image: 'img/ben.png'
  },
  {
    image: 'img/max.png'
  },
  {
    image: 'img/mike.png'
  },
  {
    image: 'img/perry.png'
  },
  {
    image: 'img/ben.png'
  },
  {
    image: 'img/max.png'
  },
  {
    image: 'img/mike.png'
  }
];

let resetCards = angular.copy(cards);

function _addCards(cardsArr, quantity) {
  for (var i = 0; i < Math.min(cards.length, quantity); i++) {
    cardsArr.push(cards[0]);
    cards.splice(0, 1);
  }
}

function bindModalEvts($scope) {
  $scope.closeMatchModal = function() {
    $scope.matchModal.hide();
  };

  $scope.closeNewChallengeModal = function() {
    $scope.modalNewChallenge.hide();
  };

  $scope.closeProfileModal = function() {
    $scope.profileModal.hide();
  };

  $scope.closeEditProfileModal = function() {
    $scope.editProfileModal.hide();
  };

  $scope.openEditProfileModal = function() {
    $scope.editProfileModal.show();
  };

  $scope.closeNewJobPositionModal = function() {
    $scope.modalNewJobPosition.hide();
  };

  $scope.closeSearchRequirementsModal = function() {
    $scope.modalSearchRequirements.hide();
  };

  $scope.closeSalaryRangeModal = function() {
    $scope.modalSalaryRange.hide();
  };

  $scope.closeChooseSchoolsModal = function() {
    $scope.modalChooseSchools.hide();
  };

}

export default class ExploreCtrl {
  constructor($scope, $ionicModal) {
    let _self = this;

    this.$scope = $scope;
    this.cards = cards;

    _self.$scope.modalNewChallenge = $ionicModal.fromTemplate(require('../tpl/modals/newChallenge.html'), {
      scope: _self.$scope,
      animation: 'slide-in-up'
    });

    _self.$scope.matchModal = $ionicModal.fromTemplate(require('../tpl/modals/match.html'), {
      scope: _self.$scope,
      animation: 'slide-in-up'
    });

    _self.$scope.profileModal = $ionicModal.fromTemplate(require('../tpl/modals/profile.html'), {
      scope: _self.$scope,
      animation: 'slide-in-up'
    });

    _self.$scope.editProfileModal = $ionicModal.fromTemplate(require('../tpl/modals/profile_edit.html'), {
      scope: _self.$scope,
      animation: 'slide-in-up'
    });

    _self.$scope.modalNewJobPosition = $ionicModal.fromTemplate(require('../tpl/modals/newJobPosition.html'), {
      scope: _self.$scope,
      animation: 'slide-in-up'
    });

    _self.$scope.modalSearchRequirements = $ionicModal.fromTemplate(require('../tpl/modals/searchRequirements.html'), {
      scope: _self.$scope,
      animation: 'slide-in-up'
    });

    _self.$scope.modalSalaryRange = $ionicModal.fromTemplate(require('../tpl/modals/salaryRange.html'), {
      scope: _self.$scope,
      animation: 'slide-in-up'
    });

    _self.$scope.modalChooseSchools = $ionicModal.fromTemplate(require('../tpl/modals/chooseSchools.html'), {
      scope: _self.$scope,
      animation: 'slide-in-up'
    });

    bindModalEvts(_self.$scope);

  }

  $onInit() {
    _addCards(2);
  }

  cardDestroyed(index) {
    console.log(index);
    this.cards.splice(index, 1);
    _addCards(1);
    this.isMoveLeft = false;
    this.isMoveRight = false;
  }

  cardSwiped(index) {
    console.log(index);
    this.cards.push(cards[Math.floor(Math.random(1) * 8)]);
  }

  cardSwipedLeft(event, index) {
    console.log(this.cards[index], 'NOPE');
    event.stopPropagation();
  }

  cardSwipedRight(event, index) {
    console.log(this.cards[index], 'LIKE');
    event.stopPropagation();

    // Open Match popup
    if (cards.length % 3 === 1) { this.openMatchModal(); }
  }

  cardPartialSwipe(amt) {
    this.isMoveLeft = amt < -0.15;
    this.isMoveRight = amt > 0.15;
  }

  reset() {
    cards = angular.copy(resetCards);
    _addCards(this.cards, 2);
  }

  openNewChallengeModal() {
    this.$scope.modalNewChallenge.show();
  }

  openMatchModal() {
    this.$scope.matchModal.show();
  }

  openProfileModal(isFromCard) {
    this.isFromCard = isFromCard;
    this.$scope.profileModal.show();
  }


  openNewJobPositionModal() {
    this.$scope.modalNewJobPosition.show();
  }

  openSearchRequirementsModal() {
    this.$scope.modalSearchRequirements.show();
  }

  openSalaryRangeModal() {
    this.$scope.modalSalaryRange.show();
  }

  openChooseSchoolsModal() {
    this.$scope.modalChooseSchools.show();
  }

  $onDestroy() {
    this.$scope.$destroy();
  }
}
