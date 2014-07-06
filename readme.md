Meowcoder
=========

Version 0.0.1

by Megan John and Ben John

- Encode to meows
- Decode from meows

To-Do List
----------

- Rewrite meow.meowcoder.Lang as a constructor
  - One instance, meow.meowcoder.lang
  - Five public methods,
    - .assignEnglishToMeow ( _english, _meow )
      - This is for the initial definition of meow.meowcoder.lang to use
      - Example, meowcoder.meow.lang.assignEnglishToMeow ( 'a', 'me' );
    - .getLengthOfMeowFromEnglishAt ( _english, _at )
      - This is for the encoder to use
      - Example, _length = meowcoder.meow.lang.getLengthOfMeowFromEnglishAt ( 'abcdefghijklmnop', 5 );
      - Typically returns 1
    - .getMeowFromEnglish ( _english )
      - This is for the encoder to use
      - Example, _meow = meowcoder.meow.lang.getMeowFromEnglish ( 'a' );
      - Here returns 'me'
    - .getLengthOfEnglishFromMeowAt ( _meow, _at )
      - This is for the decoder to use
      - Example, _length = meowcoder.meow.lang.getLengthOfEnglishFromMeowAt ( 'mrmemoowermoow', 6 );
      - Typically returns 2
    - .getEnglishFromMeow ( _meow )
      - This is for the decoder to use
      - Example, _english = meowcoder.meow.lang.getMeowFromEnglish ( 'me' );
      - Here returns 'a'
