
(function( $ ) 
 {  
  $.fn.preload = function(options)  //initiate & name the function
  {
    // settings object
    var settings = $.extend(
      {
        // These are the defaults.
        loadingClass: '',                              // The delay before the process starts
        loadedClass: '',
				progressFunction: null,
				onComplete : null
      }, options );

      
		//Count & Total Length variables
		var ct = 0;
		var loadCount = this.length;
		
		
    //do some stuff before looping through
		$("." + settings.loadedClass).css("display","none");
		$("." + settings.loadingClass).css("display","block");
		
		
		// load one by one
    this.each(function(index, element)
    {			
			var img = new Image();
			img.src = $(element).attr('src');		
			img.onload = loaded;			
    });
	
		
		//When each element has loaded
		function loaded()
		{
			ct++;
			if (settings.progressFunction !== null)
			{
				settings.progressFunction(ct, loadCount);
			}
			if (ct >= loadCount)
			{
				console.log("done!");
				
				
				if (settings.onComplete === null)
				{
					// bring the loaded stuff & hide the loading class
					window.setTimeout(function()
														{
															$("." + settings.loadingClass).fadeOut(200, function(){$("." + settings.loadedClass).fadeIn(200);});															
														},300);
					
				}
				else
				{
					settings.onComplete();	
				}
			}
		}
  };
  

}(jQuery));

