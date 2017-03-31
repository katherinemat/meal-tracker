# Meal Tracker

#### _Keep track of past meals with details and calories._

#### By _**Katherine Matthews**_

## Description

_Single page website to log user's meals with calories and meal details, including how the food makes the user feel and how long the food takes to prep. Users can sort food entries by those meals with more or less than 500 calories. Also includes the ability to edit meals after they've been added._

## Setup/Installation Requirements

* Clone repo off of github to local machine
* inside the terminal, while inside the project directory, run the following commands
_(requires node and bower to be installed globally on computer)_
      $ npm install
      $ bower install
      $ gulp build
      $ gulp serve
* gulp will run a local server that opens up this project's webpage

## Specifications

1. view list of hard-coded meal entries on homepage by making a list-meal component
- create new-meal component with a form to make new meal entries
- link new-meal component with app component by event binding the function that creates new meals
- make a component for editing meals. must get single meal object from meal-list component to travel through app component and back up to edit-meal component
- display only meals with more or less than 500 calories. includes building a pipe to sort array of meal objects accordingly

## Known Bugs

None.

## Technologies Used

* _Angular2_
* _Node_
* _Bower_
* _SCSS_
* _Javascript_
* _HTML_
* _CSS_

### License

*This project is licensed under the MIT license.*

Copyright (c) 2017 **_Katherine Matthews_**
