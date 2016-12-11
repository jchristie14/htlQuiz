"use strict";

  function isViewable(){

	  var pic=document.getElementById('myimage').getBoundingClientRect(); //get image information

	  var windowH=window.innerHeight, windowL=window.innerWidth; //get viewport information

	  var topEdge=pic.top-windowH; //get location of top edge of image relative to viewport
	  var leftEdge=pic.left-windowL; //get location of left edge of image relative to viewport

	  var verticleVisible=(topEdge<0 && topEdge>(-windowH-pic.height)) //return true if image is vertically within viewport
	  var horizontalVisible=(leftEdge<0 && leftEdge>(-windowL-pic.width)) //return true if image is horizontally within viewport


	  	if (verticleVisible && horizontalVisible){
	  		window.console.log("visible");
	  	} else { return }

  }
		
	  setInterval(isViewable, 2000);

	
