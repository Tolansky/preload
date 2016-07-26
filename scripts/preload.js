
(function( $ ) 
 {  
  $.fn.preload = function(options)  //initiate & name the function
  {
    // settings object
    var settings = $.extend(
      {
        // These are the defaults.
        loadingClass: '',                              // The delay before the process starts
        loadedClass: ''
      }, options );

      
    
    //do some stuff before looping through
	$("." + settings.loadedClass).css("display","none");
	$("." + settings.loadingClass).css("display","block");
    
	
    // loop through the objects
    this.each(function()       
    {
      //pass in an array of 0s the length of the text
      var array = new Array();
      for (var i = 0; i <= originalText.length; i++)
      {
        array[i] = 0;
      }
      
      //call the recursive function for this object
      hackTextRecurseFunction
      (
        settings.initialDelay,        // initial delay
        0,                            // iteration count (increments through recursion)
        originalText,                 // text to replace
        array,                        // current text at looped point in time
        this,                         // object to apply work to
        settings.charIterations,      // how many characters to go through before hitting the right one
        settings.delayBetweenChars,   // delay between characters
        settings.symbols              // Symbols to go through while looping randomly
      );       
    });
	
	
	//Do some stuff after looping
	
	
	
  };
  

}(jQuery));

