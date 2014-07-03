meow.meowcoder.Encoder = function ( ) {

  var _this, _text, _currentCharacterIndex;
  _this = this;
  
  _this.setText = function ( _newText ) {
    _text = _newText;
  };

  _this.getTranslation = function ( ) {
    var _result;
    _result = '';
    _currentCharacterIndex = 0;
    while ( _areThereMoreResults ( ) )
      _result += _getNextResult ( );
    return _result;
  };

  function _areThereMoreResults ( ) {
    return _currentCharacterIndex < _text.length;
  }

  function _getNextResult ( ) {
    var _nextInput, _nextResult;
    _nextInput = _getNextInput ( );
    _nextResult = _getTranslationOf ( _nextInput );
    return _nextResult;
  }
  
  function _getNextInput ( ) {
    var _nextInput;
    _nextInput = _text.charAt ( _currentCharacterIndex );
    _currentCharacterIndex++;
    return _nextInput;
  }
  
  function _getTranslationOf ( _anInput ) {
    if ( meow.meowcoder.lang.hasOwnProperty ( _anInput ) )
      return meow.meowcoder.lang[ _anInput ];
    else
      return _anInput;
  }

};
