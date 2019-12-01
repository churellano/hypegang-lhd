import React from 'react'

/*
  <p><button onClick={this.clickCounter("allergies")} type="button">Click me!</button></p>
  <p><button onClick={this.clickCounter("light sensitivity")} type="button">Click me!</button></p>
*/

export default class Profile extends React.Component {
  render() {
    return (
      <div>
        <p><button onClick={(e) => this.clickCounter(e, "wheelchair friendly")} type="button">wheelchair friendly</button></p>
        <p><button onClick={(e) => this.clickCounter(e, "allergies")} type="button">allergies</button></p>
        <p><button onClick={(e) => this.clickCounter(e, "light sensitivity")} type="button">light sensitivity</button></p>
<div id="result"></div>

      </div>
    );
  }

  clickCounter(event, field) {
    // var field = "wheelchair friendly";
    let updatedValue = "true";
    if (typeof(Storage) !== "undefined") {
      if (field === "wheelchair friendly") {
        console.log(typeof(sessionStorage.wheelchair))
        if (typeof(sessionStorage.wheelchair) === "string") {
          if (sessionStorage.wheelchair === "true") {
            sessionStorage.wheelchair = "false";
          }
          else if (sessionStorage.wheelchair === "false") {
            sessionStorage.wheelchair = "true";
          }
          else {
            sessionStorage.wheelchair = "false?"
          }
        } else {
          sessionStorage.wheelchair = "true";
        }
        updatedValue = sessionStorage.wheelchair;
      }
      if (field === "allergies") {
        if (typeof(sessionStorage.allergies) === "string") {
          if (sessionStorage.allergies === "true") {
            sessionStorage.allergies = "false";
          }
          else if (sessionStorage.allergies === "false") {
            sessionStorage.allergies = "true";
          }
          else {
            sessionStorage.allergies = "false?"
          }
          // sessionStorage.allergies = !sessionStorage.allergies;
        } else {
          sessionStorage.allergies = "true";
        }
        updatedValue = sessionStorage.allergies;
      }
      if (field === "light sensitivity") {
        if (typeof(sessionStorage.light) === "string") {
          if (sessionStorage.light === "true") {
            sessionStorage.light = "false";
          }
          else if (sessionStorage.light === "false") {
            sessionStorage.light = "true";
          }
          else {
            sessionStorage.light = "false?"
          }
          // sessionStorage.light = !sessionStorage.light;
        } else {
          sessionStorage.light = "true";
        }
        updatedValue = sessionStorage.light;
      }
      console.log(sessionStorage.wheelchair)

      document.getElementById("result").innerHTML = "The field for " + field + " has been updated to " + updatedValue + "!";
    } 
    
    else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }

  
}

