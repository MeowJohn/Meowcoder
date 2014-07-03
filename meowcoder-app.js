meow.meowcoder.App = function ( ) {
  
  var _encoder, _decoder, _textToTranslateField, _resultField;
  
  _encoder = new meow.meowcoder.Encoder();
  _decoder = new meow.meowcoder.Decoder();
  _textToTranslateField = document.getElementById ( 'text-to-translate-field' );
  _resultField = document.getElementById ( 'result-field' );
  
};

meow.meowcoder.app = new meow.meowcoder.App();
