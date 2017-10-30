
 # Changelog
All notable changes to Royal Canin Design Language will be documented on this page.
[View Full](http://developer.royalcanin.com/changelog.html)

 ## v3.0.0
Following the recent v2.0.0 update, in this release we give you another boat load of code optimisations on our journey to the land of implementation utopia. A 16 pixel icon set is now also a thing of beauty for design and development. We banished some bugs on responsive typography to the past amongst some other ghosts, ghouls and demons. And finally, whilst we can’t help you find love, we can give you a long lost search feature to help you find what you are looking for.
 ### Breaking Changes
 ##### Form Elements Update
The "rc-" prefix has been removed from form input classes in order to be consistent with the rest of Design Language. Form elements now also follow BEM class naming convention.
 ### New Features
 ##### Small 16x16px Icon Set
There is a new iconset designed and optimised at 16x16px.
 ##### Search Feature
A search feature has been implemented to make it easier to find what you need.
 ##### Copy Code to Clipboard
All code snippets can now be copied instantly via a button.
 ### Minor Updates/Bug fixes
 ##### Responsive Typography
Type scaling has been improved across mobile devices.
 ## v2.0.0
 ### Breaking Changes
 ##### Renamed Javascript Object
All instances of RCWDL have been renamed to RCDL.
 ##### Renamed Toggle Class Method
RCDL.toggleClass() has been renamed to RCDL.modifyClass() with added type parameter.
 ##### Icon Class Change
All Royal Canin icons now require the base class .rc-icon.
 ### New Features
 ##### Changelog page
Added the current page so that changes are clearly visible and easy to track.
 ##### Alert Functionality
Added default functionality for closing alerts and storing that decision in the current session.
 ### Minor Updates/Bug fixes
 ##### Correct Icon Scaling
Icon scaling has been improved by targeting the psuedo element.