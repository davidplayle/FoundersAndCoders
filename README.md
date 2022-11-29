# Planning 

Once I had completed all the other projects, I was given the task of creating a website. 
This website will have a home page as well as links to other projects I have created while applying for this course. 
In the early planning phase I therefore decided to break this down into small chunks.

On the home page I was required to introduce myself to the user. 
I kept this brief introducing myself, giving a brief insight in other interests outside of web development and included an image of myself. 
I felt that this was lacking a lot of content, so I included a brief paragraph of places I have been lucky enough to travel to around the world. 
This will have a screenshot image taken on Google Earth plotting the places I have visited. 
In this section I decided to embed a playlist from my Spotify account.  

![Alt text](https://github.com/davidplayle/FoundersAndCoders/blob/main/Projects/images/Home%20Page%20.jpg)

I was also required to include a section on the page telling the user why I would like to go into web development. 
This section will include my feature project. I chose to create an image carousel of technology I have seen so far during my lifetime. 
The image carousel will allow the user to navigate through the slides and pause the slide show.  

![Alt text](https://github.com/davidplayle/FoundersAndCoders/blob/main/Projects/images/Home%20Page_2.jpg)

This page would also need to adapt to different screen layouts, meaning that some of the images may shrink based on a different viewport width. 
The navigation bar at the top of the page will be stacked into columns instead of rows on a screen width of 480px. 
If the user turns their tablet from landscape to portrait, the same will happen. 

![Alt text](https://github.com/davidplayle/FoundersAndCoders/blob/main/Projects/images/Home%20Page_3.jpg)

Now I have a rough sketch of how I want my website to look, I need to now make every page consistent throughout the site. 

# Building

The first steps of building phase of this website were to make everything appear in the same layout. 
This required me to build the following: 

1.	A header which is where the title of the page will go. 
2.	A navigation menu so the user can navigate to other pages on the site. 
3.	A footer of the page. 

This all needs to be centralised in the middle of the page with the background image flowing in the background. 

I first constructed a header for the title of the page, nav, div, footer. These are the foundations for all my content to fit into.
Once I had specified the elements in an html doc, I then created a CSS file. This will instruct the browser exactly how I want my website to be styled. 
Using the query selector I targeted the header, nav, and footer and created used the border property with a value of solid black so I can see the outline of each element I have selected. 
I then gave them a max-width property with the value of 990px and a min-width property of 480px. This tells the browser that I want these elements to have a maximum-width and a minimum-width.  
The height of these elements will be set to auto using the height property. This ensures that all the contents of that element fit inside it. Then I need to include the margin property to centralise the elements to the middle of the page. 
This is proved by minimising and maximising the screen width. Once that was done, I now have a templated for every page on my website. 

```
header, nav, footer{
	border: solid black;
  	height: auto;
  	max-width: 990px;
  	min-width: 480px;
  	margin: 0px auto;
}
```

![Alt text](https://github.com/davidplayle/FoundersAndCoders/blob/main/Projects/images/Design.jpg)

I now need to created tabs listing every page that is on my website. These tabs will be formed using `<div>` elements. 
Within these elements I put an `<a>` anchor tag to attach the link to each of these div’s. 
For each of these `<div>` elements I assigned an ID attributed giving them all the same name. 
This way I can target each tab in the navigation menu. 

![Alt text](https://github.com/davidplayle/FoundersAndCoders/blob/main/Projects/images/Design_2.jpg)

Each tab in the menu will be centralised by setting the margin to 0px auto. However, for them to be displayed in the same line I have used to display property with the value of inline-block otherwise each tab will appear stacked. 
I also need to factor in the screen width. As the screens view-port changes I want the tabs in the menu to appear on the same line until the view-port width is 480px the size of the smart-phone. 

```
#link {
  	border: solid black;
  	margin: 0px auto;
  	display: inline-block;
  	flex-direction: row; 
}
```

I want to now instruct tabs to change their appearance when the screen size is 480px. 
For this I have used a media screen query. Within this query I have targeted the `<nav>` element that contains all the tabs in the navigation menu and given it a flex-direction of this time a column meaning that every tab will now be stacked into one column. 
I set its height to auto, so each tab sits perfectly in the container. Should the tabs need to change in size, the nav element adjusts its size. 
Each tab needs to be stretched across the nav container, so I have specified a width of 100% for these tabs when selecting the `<div>` element.

```
@media screen and (max-width: 480px){
 
   nav{
    display: flex;
    flex-direction: column; 
    height: auto; 
  }
  
  div{
    width: 100%;
  }
}
```

This layout can now be copied for each web page in my website. 

![Alt text](https://github.com/davidplayle/FoundersAndCoders/blob/main/Projects/images/Design_3.jpg)

All I now need to do is start adding the main content to my website. On the home page I have a section that is introducing myself with images and an embedded playlist from Spotify. 

For this section I created a `<div>` within the `<main>` body of the html document. I gave this div an ID such as `#aboutMe` so I can easily select it using the query selector in css. I added an image from a file on my computer to an `<img>` tag and specified its source in the src attribute. 
After specifying the image I could then include a header to this section using `<h1>` tag and then include the paragraph tag `<p>`. All the text needs to flow around the picture and so I used the float property for the image tag and set the property value to left. 
This means that the text can flow around the picture however there was still several issues, keeping the image within the section. This required me to call up the select the `<div>` element and use the property of overflow and set it to hidden, so the browser knows that the image must not overflow outside of its container. 
For the image element I gave it an ID attribute with the name `#profile`. I can then in css selector that id and then specify the exact size of the frame if you like. 

```
 #profile{ 
  height: 220px;
  width: 180px;
  padding-right: 9px;
  float: left;
 
  display: inline-block;
}
```

I can now target the id with the `<img>` tag and set a max-height and max-width to 100%. Now this image will fit within its frame and not exceed a certain size. 
As for the text that flows around the image, I can then reference its tag and align the text to be justified using the text-align property. 

For the screen shot of the google earth image I floated that image to the right, with its text justified around it. I also mentioned I will add a music playlist to this section. 
Therefore I embedded the playlist from my Spotify account to my web page. This was the last element within the container. 

The next section required mention why I would like to be a web developer. Again I created another `<div>` and named this section `#joining_the_course`. 
Both of these sections #aboutMe and `#joining_the_course` share the same dimensions as the header, nav, and footer simply because the presentation need to be identical throughout your web site.

I then copied in my feature I made of the image carousel and included it in this section. I then copied the html code from my home website, and created separate html with their own names, and script and style sheets. 
Every style sheet for per html page has a unique name, and every script file has its own name to fit as each page will have different content we will be refencing in css and js. 

# Debugging

For this feature project I have built a container for the carousel. This was a div container with for the images to sit into a frame like the profile image I used on the home page. 
This was centred the container using the property justify-content and setting it to centre. I needed to make the position relative as the buttons and dots will need to keep in line with the window otherwise they would just jump around the page. 
I found that if I set the position of the window to relative, the slider dots that contain the actual dots for navigating through the carousel also relative, and the buttons to absolute they would keep in align with the window. 
The slider dots were a container for the dots and needed each item/dot to be centralised using align-items: centre when selecting the class id in css. 

```
.window {
  display:flex;
  justify-content: center;
  margin: 0px auto;
  position: relative;
}
```

```
 .dot {
	cursor: pointer;
  	height: 15px;
  	width: 15px;
  	margin: 0 2px;
  	background-color: `#bbb;`
  	border-radius: 50%;
  	display: inline-block;
  	transition: background-color 0.6s ease;
}
```
```
.sliderDots{
  max-width: 1000px;
  position: relative;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
}
```

```
.buttons{
	cursor: pointer;
  	position: absolute;
  	top: 50%;
  	width: auto;
  	margin-top: -22px;
  	padding: 15px;
  	color: white;
  	font-weight: bold;
  	font-size: 18px;
	transition: 0.6s ease;
  	border-radius: 0 3px 3px 0;
  	user-select: none;
}
```

```
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}
```

Each dot would also need to fade every time its associated image changes to the next. 

```
.prev:hover, .next:hover, .pause:hover {
  background-color: rgba(0,0,0,0.8);
}
```
```
.active, .dot:hover {
  background-color: #717171;
}
```

I found this project quite challenging as I had never done this before, but some online research allowed me to actually achieve what I needed to do.  

```
.active, .dot:hover {
  background-color: #717171;
}
```

```
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}
```

To create this feature I decided to start again from scratch this time in codePen. 
I found a couple of articles online on how to get an image carousel to automatically play. 
This is what I found. To my understanding this function called showSlides starts of with an index variable called i. 
This index value is first used in a for loop telling using a query selector through javaScirpt we can tell each image how it should be displayed. 
In this case we don’t want that item in the array to be rendered with the display property set to “none”. 
This loop increments the index value of I by 1 after each cycle. Once the entire loop is finished being I is not less that the length of the slide array object we can then increment the variable slideIndex which was declared outside of this function. 
We then comes across a if statement. If `slideIndex > slides.length`, in this case it isn’t we don’t execute the true statement. We then come across another for loop this one simply replaces the dots class name with “active” from “dot”. It does this to each dot in the array object variable dots. 
Once this loop is finished, we then come across another statement, `slides[slideIndex-1].style.display="block";`. This says that takes the slides array object with the index of `slideIndex-1` being the first item within the array and using the query selector through js we can display the image in “block”. 
It then looks at the `dots[slideIndex-1].className += " active";`. 
This updates the dot at the specified value of `slideIndex-1` to have a class name of active. 
If we look at the css file we can see that the element with the class name of .active has a background colour changed to a certain background color: 

```
.active, .dot:hover {
  background-color: #717171;
}
```

```
var slideIndex = 0;
showSlides();
var slides,dots;
var timeoutIntervalId = null;


function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    resetTimeout();   
}
```

This function resetTimeout plays a key role it tells the image carousel when it should stop and the exact time interval between each slide. 
It has an if statement that based on the condition `timeoutIntervalId !==null`. This is saying that if the `timeoutIntervalId !==null` meaning it’s not equal 0 which it true as its equal to null then the true statement can’t be executed. 
This true condition clears the current value of the `timeoutIntervalId` variable in other words stops the time that was set. 
Outside of the if statement we have updated the variable `timeoutIntervalid` with the function `setTimeout` which executes the function `showSlides`, with a value of 8000. 
This means that the slide interval is changed every 8 seconds. You can see what happens after every slide change, the `resetTimeout()` function is invoked at the end of the `showSlides` function. The initial state of the `timeoutIntervalid` variable is null but after it then triggers `setTimeout`, it goes back and shows the next `slideIndex` triggers the `resetTimeout` function and then the if condition is met which indicates slight pause and then the `timeoutIntervalId` variable is set to `setTimeout(showSlides, 8000)` again. 
This is a loop that will continue going on until the user interacts. 

```
   function resetTimeout() {
    if (timeoutIntervalId !== null) {
      clearInterval(timeoutIntervalId);
    }
    timeoutIntervalId = setTimeout(showSlides, 8000); 
}
```

Now to the buttons. I had difficulty with this one but again the article I found online allowed me to take in what exactly is going on. 
For the buttons a div has been created that contains `<a>` anchor elements. 
Each of these elements acts as a link when clicked. We have given them names “prev”, “play”, “next” which have an event listener assigned within the element itself. 
The attribute onclick tells the browser that once this button is clicked then please invoke the following function in the js file. 

1.	plusSlides(-1) for the previous button 
2.	plauseSlide() for the play button 
3.	plusSlides(1) for the next button

```
 <div class="buttons">
   <a id="prev" onclick="plusSlides(-1)">&#8810;</a>
   <a id="play" onclick="pauseSlide()">&#9199;</a>
   <a id="next" onclick="plusSlides(1)">&#8811;</a>
 </div>
```

This immediately triggers the `resetTimeout()` function temporarily pausing the slide show and then executing it again with a `setTimeOut` method. Meanwhile the slideIndex value is updated with the value equal to the parameter value therefore subtracting its index by 1. 
It then runs an if condition telling the browser that if the `slideIndex` is greater than the length of the array object slides, of it is it updates the `slideIndex` to 1, otherwise looks at the false condition `if(slideIndex < 1)` if it is then trigger the statement which updates the `slideIndex` to the length of the slides array object. 
At the end of function it displays the slide with the slide index -1 and displays the previous image using the display property with the value “block” as it was subtracted by 1 when clicking on the previous button. This will also display the previous dot in the sequence. 

```
 function plusSlides(position) {
    resetTimeout();
    slideIndex +=position;
    if (slideIndex> slides.length) {slideIndex = 1}
    else if(slideIndex<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
```

The same function is executed when you click on the next button, this time a value of 1 is passed to the functions parameter. 

We come across the `pauseSlide()` function. When the user click's this button an event listener is immediately triggered. This contains an if statement which condition reads if the `timeoutIntervalId` is exactly equal to null, execute the true statement `timeoutIntervalId = setTimeout(showSlides, 8000);`. 
This indicates that the value null represents that the slide show is not already in pause. Otherwise, we trigger the next statement which has a method used to clear the interval `clearInterval(timeoutIntervalid)` equal to null this time pausing it until the user click the play button again which will execute the true condition. 
Of course, if the user refreshed the page the slide show starts again.

```  
function pauseSlide() {
  if (timeoutIntervalId === null) { 
      timeoutIntervalId = setTimeout(showSlides, 8000);
  } else {
      clearInterval(timeoutIntervalId);
      timeoutIntervalId = null;
  }
}
```

For the slider dots. This is similar to the buttons but when the user clicks on a button a unique value is represented for that current slide. 
This time taking the user to the slide in relation to the dot. 

```
<div class="sliderDots" style="dots">
   <span class="dot" onclick="currentSlide(1)"></span>
   <span class="dot" onclick="currentSlide(2)"></span>
   <span class="dot" onclick="currentSlide(3)"></span>
</div>
```
```
  function currentSlide(index) {
    resetTimeout();
    if (index> slides.length) {index = 1}
    else if(index<1){index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";  
    dots[index-1].className += " active";
}
```

Finally, when the user hovers their cursor over the dot, its background colour changes.

```
.active, .dot: hover {
  background-color: #717171;
}
```



