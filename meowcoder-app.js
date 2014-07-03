meow.meowcoder.App = function ( ) {
  
  var _textToTranslateField, _resultField, _encodeButton, _decodeButton;
  
  _textToTranslateField = document.getElementById ( 'text-to-translate-field' );
  _resultField = document.getElementById ( 'result-field' );
  _encodeButton = document.getElementById ( 'encode-button' );
  _decodeButton = document.getElementById ( 'decode-button' );
  
  _encodeButton.onclick = _encodeNow;
  _decodeButton.onclick = _decodeNow;
  
  function _encodeNow ( ) {
    var _encoder;
    _encoder = new meowcoder.meow.Encoder();
    _encoder.setText ( _textToTranslateField.val );
    _resultField.val = _encoder.getTranslation ( );
  }
  
  function _decodeNow ( ) {
    
  }
  
};

meow.meowcoder.app = new meow.meowcoder.App();
