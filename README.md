# _Places You've Been_

#### _Exercise in Javascript Objects for Epicodus, 01.27.2020_

#### By _Tiffany Siu and Neha Doodi_

## Description

_This was an exercise made for the Epicodus Intro to Programming and C#/React course.  It practiced BDD wiht writing specifications first as well as Javascript objects and object properties_

## Setup/Installation Requirements

### Requirements to Run

* _Web Browser_

### Instructions

*This page may be viewed by:*

1. Clone the [repository](https://github.com/TSiu88/my-first-webpage.git) from my [GitHub page](https://github.com/TSiu88)
2. Open the **index.html** file in any web browser.

## Other Technologies Used
* _HTML_
* _CSS_
* _Javascript_
* _JQuery 3.4.1_
* _Bootstrap 4.4.1_
* _Markdown_

## Specification

* The program will return alert if no name of place is input by user
  * Example Input: name: ""
  * Example Output: alert: "Name required.  Please enter place name."
* The program will take the place name the user input and create an instance of a place object that is displayed on the site when click "Add" button
  * Example Input: name: "Seattle"
  * Example Output: show "Seattle" 
* The program will create a unique ID for a place object that is created
  * Example Input: name: "Seattle"
  * Example Output: in program, sets unique ID for "Seattle" to 1
* The program will take landmarks the user input with the minimum name required and add it to the object as an array of Strings when click "Add" button
  * Example Input: 
    name: "Seattle"
    landmarks: "Space Needle", "Fremont Troll"
  * Example Output:
    Seattle
    Landmarks seen: ["Space Needle", "Fremont Troll"]
* The program will take the date the user input with the minimum name required and add it to the object as an array of Strings when click "Add" button
  * Example Input: 
    name: "Seattle"
    date: 2005, 2010
  * Example Output:
    Seattle
    Date: ["2005" , "2010"]
* The program will take notes the user input with the minimum name required and add it to the object as a String when click "Add" button
  * Example Input: 
    name: "Seattle"
    notes: "very rainy"
  * Example Output:
    Seattle
    Notes on the place: very rainy
* The program will display all information on the instance of a place when clicked on on the site
  * Example Input: click "Seattle"
  * Example Output: shows
    Seattle
    Landmarks seen: "Space Needle", "Fremont Troll"
    Dates visited: "2005", "2010"
    Notes: Very rainy
* The program will remove a place with the input name when click "Remove" button
  * Example Input: "Seattle" -> remove
  * Example Output: no longer shows "Seattle"
  
## Known Bugs

_There are currently no known bugs in this program_

## Support and contact details

_If there are any question or concerns please contact us at our emails. Thank you._

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Tiffany Siu, Neha Doodi_**
