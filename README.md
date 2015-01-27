# my-earthquakes-feed-test
This project extracts and presents data from an external file located in a different domain, solving issues caused by the "same-origin" policy, using JSONP. Information about AJAX cross-origin scripts available here: http://www.ajax-cross-origin.com/

This repository is linked to my PhoneGap account which allows me to build an app from there. 
The external JSON data is retrieved via JavaScript and also jQuery AJAX calls + JSONP to solve the cross-origin issues that the external feed has.
Said JavaScript calls a Google Script to retrieve the data which is then stored as JavaScript objects and arrays that help populate the list which is presented with HTML & CSS.
At the same time, an array is filled with the same data from the list and transferred to my customized markers, rendered by the Google Maps V3 API.
