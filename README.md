# Trivia Crack Auto Card Clicker
Tiny chrome extension that auto clicks your cards for you as soon as they're ready so you get optimal resources.

### Installation Instructions
* Checkout the repo
* Enable developer mode extensions in Chrome
* Add the folder as an unpacked extension
* Browse to the Trivia Crack game on Facebook.  If the extension is installed correctly, you should see some extra text below your cards telling you that the auto-clicker is active.

### Known Issues
I am fairly certain now that any instability running this for long periods of time is due to Trivia Crack itself loading a bunch of things (ads?) in the background, and not due to anything this extension is doing.

I have added some features to help deal with the crashing and make the extension more reliable:
* The extension reloads the page once every half hour
* The extension will auto-close the top ads automatically (this may help with stability)

If you still notice crashing and happen to stumble on something that makes it more stable, let me know and I'll try to add it to the extension.  Perhaps try running an ad blocker.  They detect this now and won't let you play the game, but the extension should still be able to click cards for you.  I've had their ads try to do malicious things on more than one occasion while I let this run, so I've given up trusting them.

### Credit
The original version of this extension was heavily based off of [Trivia Cracker](https://github.com/jodoglevy/TriviaCracker) and also used jodoglevy's other tool [Gargl](https://github.com/jodoglevy/gargl).  I have since switched to a simpler method of auto-clicking the cards.
