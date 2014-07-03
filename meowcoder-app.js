meow.meowcoder.App = function ( ) {
  
  var _encoder, _decoder, _textToTranslateField, _resultField, _encodeButton, _decodeButton;
  
  _encoder = new meow.meowcoder.Encoder();
  _decoder = new meow.meowcoder.Decoder();
  _textToTranslateField = document.getElementById ( 'text-to-translate-field' );
  _resultField = document.getElementById ( 'result-field' );
  _encodeButton = document.getElementById ( 'encode-button' );
  _decodeButton = document.getElementById ( 'decode-button' );
  
  _encodeButton.onclick = _encodeNow;
  _decodeButton.onclick = _decodeNow;
  
  function _encodeNow ( ) {

  }
  
  function _decodeNow ( ) {
    
  }
  
};

meow.meowcoder.app = new meow.meowcoder.App();
