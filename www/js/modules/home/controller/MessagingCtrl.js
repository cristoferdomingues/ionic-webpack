export default class MessagingCtrl {
  constructor($stateParams, Giphy, $ionicScrollDelegate, $timeout, $ionicActionSheet) {
    this.$stateParams = $stateParams;
    this.Giphy = Giphy;
    this.$timeout = $timeout;
    this.$ionicActionSheet = $ionicActionSheet;
    this.viewScroll = $ionicScrollDelegate.$getByHandle('userMessageScroll');
  }

  _scrollBottom(target) {
    target = target || '#type-area';
    this.viewScroll.scrollBottom(true);
    this._keepKeyboardOpen(target);
    if (this.isNew) { this.isNew = false; }
  }

  // Warning: Demo purpose only. Stay away from DOM manipulating like this
  _keepKeyboardOpen(target) {
    target = target || '#type-area';

    let txtInput = angular.element(document.body.querySelector(target));
    console.log('keepKeyboardOpen ' + target);
    txtInput.one('blur', function() {
      console.log('textarea blur, focus back on it');
      txtInput[0].focus();
    });
  }

  sendText() {
    let self = this;
    this.messages.push({
      isMe: true,
      type: 'text',
      body: self.message,
      timestamp: 'Feb 26, 2016, 9:47PM'
    });
    this.message = '';
    this._scrollBottom();
    this.fakeReply();
  }

  sendGif(imageUrl) {
    console.log(imageUrl);
    this.messages.push({
      isMe: true,
      type: 'image',
      body: imageUrl
    });
    this.message = '';
    this._scrollBottom('#type-area2');
    this.fakeReply();
  }

  fakeReply() {
    this.$timeout(function() {
      this.messages.push({
        isMe: false,
        avatar: 'img/adam.jpg',
        type: 'text',
        body: 'Keep typing dude',
        timestamp: 'Feb 26, 2016, 9:47PM'
      });
      this.message = '';
      this._scrollBottom();
    }, 500);
  }

  openGiphy() {
    this.isGifShown = true;
    this.message = '';
  }

  showUserOptions() {
    this.$ionicActionSheet.show({
      buttons: [
        { text: 'Mute Notifications' },
        { text: 'Unmatch Max' },
        { text: 'Endorse Max' },
        { text: 'Show Max\'s profile' }
      ],
      cancelText: 'Cancel',
      cancel: function() {
        // add cancel code..
      },
      buttonClicked: function() {
        return true;
      }
    });
  }

  _initGiphy() {
    let self = this;
    this.Giphy.trending()
      .then(function(gifs) {
        self.gifs = gifs;
      });
  }

  $onInit() {
    this._initGiphy();
  }
}
