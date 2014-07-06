Meowcoder
=========

Version 0.0.1

by Megan John and Ben John

- Encode to meows
- Decode from meows

To-Do List
----------
- Define the meow language
- Write markup
  - IDs of the interactive controls are defined in the app file
- Write stylesheet

Advanced To-Do List
-------------------

- Write private lookup functions on meow.meowcoder.Lang constructor
  - For each translation type ( meow -> english, english -> meow ), this will consist of:
    - A loop that accesses each definition in _dictionary
    - An if statement that seeks to determine if that definition is relevant to the term being looked up
    - Returning the other term than the one being looked up
- Write length detection algorithms on meow.meowcoder.Lang constructor if necessary
  - If this is necessary, some convention about the language will have to serve as a "guide" allowing these algorithms to hook onto them. This would be predefined patterns, such as "Beginning with the letter 'w' indicates a three-letter meow character." or "A character beginning with two consonents indicates a three-letter meow character."
- Change Encoder constructor to use new public functions from meow.meowcoder.lang
- Write Decoder to use meow.meowcoder.lang the same way that Encoder will
