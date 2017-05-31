# Trivia Crack Auto Card Clicker
Tiny chrome extension that auto clicks your cards for you as soon as they're ready so you get optimal resources.

Most of the work is heavily based off of [Trivia Cracker](https://github.com/jodoglevy/TriviaCracker) and also uses jodoglevy's other tool [Gargl](https://github.com/jodoglevy/gargl).

### Installation Instructions
* Checkout the repo
* Enable developer mode extensions in Chrome
* Add the folder as an unpacked extension
* Browse to the Trivia Crack game on Facebook.  If the extension is installed correctly, you should see some extra text below your cards telling you when the next card activation will be.

### Known Issues
Sometimes if I leave it running long enough, the Chrome tab runs out of memory.  I'm not sure why, haven't bothered debugging it.  I have noticed Trivia Crack loading a ton of jank in the background, probably ads, so I wouldn't be surprised if that was causing it somehow.

I've since added some features to help deal with the crashing:
* The extension reloads the page once an hour
* The extension will auto-close the top ads automatically (this may help with stability)

If you still notice crashing and happen to stumble on something that makes it more stable, let me know and I'll try to add it to the extension.  Perhaps try running an ad blocker.  They detect this now and won't let you play the game, but the extension should still be able to click cards for you.  I've had their ads try to do malicious things on more than one occasion while I let this run, so I've given up trusting them.

Also, the countdown timers under the cards don't get updated when the auto-clicker clicks them, so they'll say "Collect" until you refresh the page.  It doesn't really bother me so I haven't looked into fixing it.
