
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
				callback : null
      }, options );

      
    console.log("jQuery called");
		
    //do some stuff before looping through
		$("." + settings.loadedClass).css("display","none");
		$("." + settings.loadingClass).css("display","block");
		
		var ct = 0;
		var loadCount = this.length;
		console.log("length is " + loadCount);
		// load one by one
    this.each(function(index, element)
    {			
			var img = new Image();
			img.src = $(element).attr('src');		
			img.onload = loaded;			
    });
	
		
		function loaded()
		{
			ct++;
			console.log(ct);
			if (ct >= loadCount)
			{
				console.log("done!");
				
				
				if (settings.callback === null)
				{
					// bring the loaded stuff
					$("." + settings.loadedClass).css("display","block");
				}
				else
				{
					settings.callback();	
				}
				
				
			}
			
		}
		
		
	
	
	
		//Do some stuff after looping
	
	
	
  };
  

}(jQuery));

