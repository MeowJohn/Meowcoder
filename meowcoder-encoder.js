meow.meowcoder.Encoder = function ( ) {

  var _this, _text, _currentCharacterIndex;
  _this = this;
  
  _this.setText = function ( _newText ) {
    _text = _newText;
  };

  _this.getTranslation = function ( ) {
    var _result;
    _currentCharacterIndex = 0;
    while ( _areThereMoreResults ( ) )
      _result += _getNextResult ( );
    return _result;
  };

};
