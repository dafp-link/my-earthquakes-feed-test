# my-earthquakes-feed-test

This project extracts and presents data from the following JSON source: http://www.seismi.org/api/eqs/  
It features a LIST and also a MAP. It shows the list first, but you can switch between map view and list view by pressing the button at the top-right corner.

I developed it using GitHub + PhoneGap to keep it clean and simple. 

The App was built in PhoneGap for Android phones and Windows phones, but you can also download the GitHub project in your computer to see how it works.

The external JSON data is retrieved via JavaScript and also jQuery AJAX calls + JSONP to solve the cross-origin issues from the external feed. The JavaScript code calls a Google Script file to retrieve the data which is then stored as JavaScript objects and arrays that help populate the list which is presented with HTML, CSS and JavaScript/jQuery.

At the same time, an array is filled with the same data from the list and transferred to my customized markers. I've incorporated the Google Maps V3 API to display the information on the map. 
