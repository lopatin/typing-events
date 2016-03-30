typingevents.js (not supported anymore, use underscore debounce or something similar instead)
===============

Implementing a chat system, or an auto-complete search feature? You will probably need to know when your user has started typing a phrase and when they have stopped. Add this library to your code and the browser will fire `typingstarted` and `typingstopped` events on `document`.

I've found that a threshold of 500ms works well for determining if a user has stopped typing a phrase, however if you want to fine-tune this to your liking, simply change the `threshold` variable at the top of the file.

Also, note that this uses the CustomEvent constructor which is not supported in Internet Explorer versions below 9. Any help with making this library fully browser compatible would be very appreciated.
