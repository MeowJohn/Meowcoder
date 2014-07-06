meow.meowcoder.Lang = function () {
  
  var _dictionary, _this;
  
  _dictionary = [];
  _this = this;
  
  _this.assignEnglishToMeow = function (_english, _meow) {
    var _definition;
    _definition = ();
    _definition.english = _english;
    _definition.meow = _meow;
   _dictionary.push (_definiton);
  };
  
  _this.getLengthOfMeowFromEnglishAt = function ( _english, _at ) {
    return 2;
  };
  
  _this.getLengthOfEnglishFromMeowAt = function ( _english, _at ) {
    return 1;
  };
  
  _this.getEnglishFromMeow = function ( _meow ) {
    return 'a';
  };

  _this.getMeowFromEnglish = function ( _english ) {
    return 'me';
  };

};

meow.meowcoder.lang = new meow.meowcoder.Lang();
meow.meowcoder.lang.assignEnglishToMeow ( 'a', 'me' );
meow.meowcoder.lang.assignEnglishToMeow ( 'b', 'mr' );
meow.meowcoder.lang.assignEnglishToMeow ( 'c', 'wa' );
meow.meowcoder.lang.assignEnglishToMeow ( 'd', 'wo' );
