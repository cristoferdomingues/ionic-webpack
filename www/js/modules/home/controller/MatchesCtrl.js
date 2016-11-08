let matches = [{
    name: 'ben',
    isNew: true
  },
  {
    name: 'mike',
    isNew: true
  },
  {
    name: 'perry',
    isNew: false
  },
  {
    name: 'max',
    isNew: false
  },
  {
    name: 'ben',
    isNew: false
  },
  {
    name: 'mike',
    isNew: false
  },
  {
    name: 'perry',
    isNew: false
  }
];
export default class MatchesCtrl {
  constructor() {
    this.matches = matches;
  }
}
