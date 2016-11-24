'use strict';

import angular from 'angular';

let cards = [{
    image: 'img/challenge1.jpg'
  },
  {
    image: 'img/challenge2.jpg'
  },
  {
    image: 'img/challenge3.jpg'
  },
  {
    image: 'img/challenge1.jpg'
  },
  {
    image: 'img/challenge2.jpg'
  },
  {
    image: 'img/challenge3.jpg'
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

  $scope.closeProfileModal = function() {
    $scope.profileModal.hide();
  };

  $scope.closeEditProfileModal = function() {
    $scope.editProfileModal.hide();
  };

  $scope.openEditProfileModal = function() {
    $scope.editProfileModal.show();
  };

}


export default class ChallengesCtrl {
  constructor($scope, $ionicModal) {
    let _self = this;
    this.$scope = $scope;
    this.cards = cards;

    _self.$scope.profileModal = $ionicModal.fromTemplate(require('../tpl/modals/profile.html'), {
      scope: _self.$scope,
      animation: 'slide-in-up'
    });

    _self.$scope.editProfileModal = $ionicModal.fromTemplate(require('../tpl/modals/profile_edit.html'), {
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

  openProfileModal(isFromCard) {
    this.isFromCard = isFromCard;
    this.$scope.profileModal.show();
  }


  $onDestroy() {
    this.$scope.$destroy();
  }
}

ChallengesCtrl.$inject = ['$scope', '$ionicModal'];
