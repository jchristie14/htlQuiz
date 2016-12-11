**Instructions**

**Please complete the following questions / exercises. Some of the points are interesting and you could write a lot about them. Don’t worry about that! We’re not particularly concerned about the nuances or terminological perfection ­­ just give 1­2 sentences that hit the main idea. We’d prefer that you guess rather than look things up, but if you do look things up, please tell us where you looked. This should take 10­30 minutes.**

**Questions**

**1. What is the difference between HTTP and HTTPS?**

HTTP stands for hypertext transfer protocol and facilitates communication between the client (a home computer) and a server (the larger web).  Browsers use HTTP to connect to servers and to render web pages. HTTPS stands for hypertext transfer protocol secure and is a secure encrypted connection to a trusted server.


**2. What is the difference between HTTP GET and POST?**

HTTP GET is a request for a webpage—the browser sends a request with limited information and receives a renderable webpage in response. In a POST, the browser is sending information to the server that may be stored in a database or otherwise used by the server.


**3. What is the difference between the HTTP 2xx status codes and 4xx status codes?**

2xx status codes indicate that the server successfully responded to the browser’s request. 4xx status codes indicate that the server could not successfully respond to the browser’s request because of some error by the browser.


**4. What is ajax? Describe a situation where it is useful.**

Ajax is an asynchronous request made by a client to a server. The ajax request is independent of other elements of the page, so its completion will not slow the loading time for the rest of the page. Ajax is useful when part of a page may be constantly updated—such as an inset the displays weather or traffic conditions—while the rest of the page is static and does not need to be re-loaded. An ajax request often returns information in the form of a JSON object, but can also return data in other forms.
 

**5. What is responsive design?**

Responsive design is web design that takes into account the fact that a page may be viewed on many different devices with different screen sizes and different technological capacities. An example of responsive design would be CSS rules that include media queries that dictate different dimensions for different screen sizes.


**6. What is the difference between these 3 CSS rules?**

```
div {background:#fff;}

#div {background:#fff;}

.div {background:#fff;}
```
	
“div {background:#fff;} will set the background color (white) on all divs in the page. “#div {background:#fff;} will set the background color for all elements (there should only be one) with the id “div.” “.div {background: #fff;} will set the background color for all elements with the class “div.”


**7. What is the difference between these 2 uses of the ```<script>``` tag?**

```
<script src=”http://example.com/whatever.js”></script>

<script>var whatever = true</script>
```

The first tag links a separate javascript file whose code will execute as the page is loaded. The second will execute when the browser reaches the tag and will set the variable “whatever” to the value of “true.”


**8. What is the difference between these two javascript snippets?**

```JavaScript
var x = function() {

return 1+1;

}();

var y = function() {

return 1+1;

};
```

The first stores and immediately invoked function in a variable “x”; it will return the value of 2 as soon as “x” is called. The second stores the function in a variable; the function is called by entering “y().”


**Practical**

**1. Write HTML/CSS to draw the following scene (inline css is fine if you want):**

**a. One red box, 200x200 pixels**

**b. One blue box, 200x200 pixels**

**c. One green box, 100x100 pixels**

**d. The green box should be centered inside the red box**

**e. The red and blue boxes should not overlap**

```
	<div id="red"></div>
	<div id="blue">
		<div id="green">
		</div>
	</div>

	<style>
	  #red {
			height: 200px;
			width: 200px;
			background-color: red;
}

    #blue {
			height: 200px;
			width: 200px;
			background-color: blue;
}

    #green {
			height: 100px;
			width: 100px;
			background-color: green;
			display: inline-block;
			margin: 50px 50px;
}
	</style>
```

**2. You have started an analytics company with the domain “hashtag­analytics.com”. You provide this tracking pixel for your customers to place on their websites. By summing the number of times the pixel was loaded, you calculate the number of visitors to each site.**

```
<img src=”http://hashtag­analytics.com/12345/pixel.gif” width=”1” height=”1”/>
```

**As it stands, this pixel has a problem because it will be cached by the browser.**

**a. Why is caching a problem for the analytics company?**

**b. How could you prevent browser caching? (use any technique(s) you want)**

**c. What will happen if the customer’s website is served over HTTPS? How could you modify the tracking pixel to fix that?**

**d. List some information the tracking company could collect (ex: IP address)**

**e. List some additional information (if any) that could be collected if a ```<script>``` tag is used instead of an ```<img>``` tag.**

Caching is a problem because after a user has loaded the page once, the browser will load the cached version of the pixel rather than re-loading the pixel, so the count will not accurately reflect the number of times the page was visited. If, for instance, the site wants to measure unique visitors per month the site could fail to count an individual who visits the site once (or more) each month, but loads the cached pixel without completing a request to the server.

Browser caching could be prevented by setting the response header used to serve the pixel image. The response header can be set to prevent caching entirely, or an appropriate maxAge can be set.
	
If the customer’s website is served over HTTPS, the pixel may not load because it is not using an https protocol and is therefore not a secure trusted connection. I believe that the only reliable modification is to serve the pixel from a trusted, HTTPS connection.
	
The tracking company could collect any information sent in the HTTP request. The information that I am familiar with is fairly basic and includes the client’s IP address, the client’s preferred human-readable language, any previously stored cookie information, and the type of computer the client is using. (This is the information given in the Chrome developer tools; console.logging the “req” object in Express shows that there is significantly more information available.)

A script tag could send more specific information about the user media, such as screen size, and could also be configured to measure (by incrementing a counter) the time spent on the site, and the location of the viewport.


**3. Harder!**

**The following image tag appears somewhere on some webpage. The rest of the page is valid HTML, but otherwise unknown.**
```
<img id=”myimage” src=”http://hashtag­analytics.com/myimage.jpg” width=”300” height=”250”/>
```

**Write plain javascript to do the following (jQuery is fine too, if you prefer):**

**Every 2 seconds:**

­ **Check whether the image is viewable**

­ **If yes, write “visible” to the console (that is, window.console)**

­ **If no, do nothing**

**\*\* the image is “viewable” if any part of it appears on the screen (so if the image is entirely above or below the viewport, then the user cannot see it, so it is not considered “viewable”)**

```JavaScript
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
```
