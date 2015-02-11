# my-earthquakes-feed-test

PROJECT DESCRIPTION --------------------

This project extracts and presents data from the following JSON source: http://www.seismi.org/api/eqs/  

You can easily switch between LIST view and MAP view by pressing the button at the top-right corner.

I developed this project using GitHub + PhoneGap to keep it clean and simple. 

The App was built with PhoneGap for Android phones and Windows phones, but you can also download the GitHub project in your computer to see how it works. 

Download the app here: https://build.phonegap.com/apps/1280810

GitHub link to this repository: https://github.com/dagmarford/my-earthquakes-feed-test


HOW IT WORKS ----------------------------

The external JSON data is retrieved via JavaScript and also jQuery AJAX calls + JSONP to solve the cross-origin issues encountered when reading the file from the Seismi.org server. The JavaScript code calls a Google Script file to deal with cross-origin, then the data is retrieved and handled as JavaScript objects and arrays to populate the list which is presented with HTML, CSS and JavaScript/jQuery. The map uses the same information loaded in the list.

At the same time, an array is filled with the same data from the list and transferred to my customized markers. I've incorporated the Google Maps V3 API to display the information on the map. 
