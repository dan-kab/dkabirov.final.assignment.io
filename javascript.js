/*
* WEB222 – Final Assignment
*
* I declare that this assignment is my own work in accordance with
* Seneca Academic Policy. No part of this assignment has been
* copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
*      Name:       <Daniil Kabirov>
*      Student ID: <064250046>
*      Date:       <12/14/2022>
*/

//Finds where the result element is:
var result = document.querySelector('#result');

//Adding a click function to the radio buttons:
//In this case, we only need one target id:
document.body.addEventListener('click', function (HR) {
var target = HR.target;
    switch (target.id) {
        case 'Hiring':
    
  //Creating an input element for the hourly rate:
   var Rate= document.createElement("input");
   Rate.setAttribute("type", "rate");
   Rate.setAttribute("name", "Hourly Rate");
   Rate.setAttribute("placeholder", "$20.00");
   Rate.setAttribute("pattern", "^[0-9]{2}.[0-9]{2}$");

    }
    //Appending the input element to the form:
 result.appendChild(Rate);
});


