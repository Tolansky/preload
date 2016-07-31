# jQuery Preload

jQuery Preload is a small plugin for your website to gracefully handling the initial load of larger images on a webpage, released freely under the Apache license. 

When run, the main content of the page will be hidden, and the images will be loaded one by one. As the images are loaded, an optional callback function is triggered (e.g. to a progress bar). Once complete, another optional function can be run, or by default any 'loading' elements will fade out, and the main content will fade in.


### Demo
[Click here](https://tolansky.github.io/preload/try.html)  to try out a sample that takes advantage of this plugin (load in private/incognito mode if you've already looked and it's cached)

### Basic Usage

Install by referencing the js file:
```sh
<script src='scripts/jquery.preload-1.00.js'></script>
```
**Elements to preload** should all be assigned a particular class, e.g. 'preloadMe'. 

**Elements to show once preload is complete** should all be assigned a particular class, e.g. 'mainContent'. 

**(Optional) Elements to display until preload completes** (if any) should all be assigned a particular class, e.g. 'loadingElements' 

At the end of your HTML body,
```sh
$(".preloadMe").preload(
    {
        loadingClass: 'loadingElements',    // Show while loading
        loadedClass: 'mainContent'	    // Show once loaded        
    });		
```         
### Customisation Options
```sh
$(".preloadMe").preload(
    {
        loadedClass: 'mainContent',	    // Show once loaded
        loadingClass: 'loadingElements',    // [optional] Show while loading 
        progressFunction: progressFn,       // [optional] Function to call for each img load
        onComplete: completeFn,             // [optional] Function to call on completion
        waitFirst: 500,                     // [optional] Wait (ms) before showing 'loading'
    });		
```        
**Progress Function:** If provided, this will call a given function with 2 parameters. The first is the index of the image that has completed loaded (incrementally). The second parameter is the total count of images to be loaded. So the receiving function could for example build a progress bar, or a message of "pictures X out of Y completed", etc. 

**On Complete Function:** If provided, this function is called after all the images are preloaded completely. PLEASE NOTE: this replaced the default fade out of the loading-elements and fade in of the loaded-elements, in case you want to do something fancier.

**Wait First:** This is defaulted to 100ms (as of v 1.00) - this delays showing the 'loading' elements in case the preload takes a sufficiently short time to make it unnecessary. For example if the user has already viewed the page and everything is cached, then there is no need to flash up a loading bar for a split second.
Dillinger uses a number of open source projects to work properly:

### Stats
| |       |
|----------------|-------|
| Files required for installation | 1 (jQuery.preload-x.y.y.js)|
| Total Size            | ~700 bytes minified, ~3kb raw   |
| Notable Requirements            | jQuery |
