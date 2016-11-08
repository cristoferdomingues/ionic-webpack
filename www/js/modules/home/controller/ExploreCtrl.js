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

    bindModalEvts(_self.$scope);

    _self.$scope.matchModal = $ionicModal.fromTemplate(require('../tpl/modals/match.html'), {
      scope: _self.$scope,
      animation: 'slide-in-up'
    });

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

  $onDestroy() {
    this.$scope.$destroy();
  }
}
