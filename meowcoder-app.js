meow.meowcoder.App = function ( ) {
  
  var _textToTranslateField, _resultField, _encodeButton, _decodeButton;
  
  _textToTranslateField = document.getElementById ( 'text-to-translate-field' );
  _resultField = document.getElementById ( 'result-field' );
  _encodeButton = document.getElementById ( 'encode-button' );
  _decodeButton = document.getElementById ( 'decode-button' );
  
  _encodeButton.onclick = _encodeNow;
  _decodeButton.onclick = _decodeNow;

  _showCatPun ( );
  
  function _encodeNow ( ) {
    var _encoder;
    _encoder = new meowcoder.meow.Encoder();
    _encoder.setText ( _textToTranslateField.val );
    _resultField.val = _encoder.getTranslation ( );
  }
  
  function _decodeNow ( ) {
    var _decoder;
    _decoder = new meowcoder.meow.Decoder();
    _decoder.setText ( _textToTranslateField.val );
    _resultField.val = _encoder.getTranslation ();
  }
  
  function _showCatPun ( ) {
    var catPuns, catPunNumber, myCatPun;
    catPuns = [];
    catPuns[0] = "We\'re not kitten.";
    catPuns[1] = "Send the lynx to all your friends.";
    catPuns[2] = "I hope you\'re feline up to this.";
    catPuns[3] = "For when you need it right meow.";
    catPuns[4] = "The purrfect solution to all your encoding needs."
    catPuns[5] = "The accuracy of it freaks meowt!"
    catPuns[6] = "Paws and consider the beauty of it."
    catPuns[7] = "Promoting litter-acy in the cat language since 2014"
    catPuns[8] = "Our Purr-pose is to help you translate."
    catPunNumber = parseInt (Math.random() * ( catPuns.length - 1))
    myCatPun = catPuns[catPunNumber];
    document.getElementById ( 'cat-pun' ).innerHTML = myCatPun;
  }
  
};

meow.meowcoder.app = new meow.meowcoder.App();
