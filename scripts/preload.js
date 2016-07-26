
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
		
		var ct = 0;
		var loadCount = this.length;
		

    // hide the files
    this.each(function(index, element)       
    {
			$(element).css("display","none");			
    });
	
		// hide the files
    this.each(function(index, element)       
    {
			$(element).css("display","none");			
    });
	
	
		// load one by one
    this.each(function(index, element)       
    {
			
			$(this).load(function()
			{
				// Handler for .load() called.
				loaded();
			});
			$(element).css("display","block");
    });
	
		
		function loaded()
		{
			ct++;
			console.log(ct);
			if (ct >= loadCount)
			{
				console.log("done!");
			}
			
		}
		
		
	
	
	
		//Do some stuff after looping
	
	
	
  };
  

}(jQuery));

