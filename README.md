# _Places You've Been_

#### _Exercise in Javascript Objects for Epicodus, 01.27.2020_

#### By _Tiffany Siu and Neha Doodi_

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

## Setup/Installation Requirements

### Requirements to Run
* _This is a great place_
* _to list setup instructions_

### Other Resources Used
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

## Notable Features

_What makes this project stand out/unique_

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

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_If there are any question or concerns please contact us at our emails. Thank you._

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Tiffany Siu, Neha Doodi_**