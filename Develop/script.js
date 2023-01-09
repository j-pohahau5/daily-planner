// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// add variable currentDay equaling dayjs and formatting it to display the way i want it to(full day name, full month name, number of day with the th)
// var currentDay = dayjs().format('dddd MMMM D[th],');
// used jquery to grab the paragraph element with currentDay id and add text of the currentDay variable
// $('#currentDay').text(currentDay);


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: 
  // What does `this` reference in the click listener function? 
  //  How might the id be useful when saving the description in local storage?

  // adding a listener to saveBtn with a function to set items in local storage
  $(".saveBtn").on("click", function() {
    // creating a variable description equaling the value content added by user from the description html class
    var description = $(this).sibling(".description").val()
    // creating variable time equaling the id of the time blocks
    var time = $(this).parent().attr("id")

    // setting items to local storage with the key being variable time and the value being the description added by user
    localStorage.setItem(time, description)
  });
  
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: 
  // How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes?
  //  How can Day.js be used to get the current hour in 24-hour time?

  // using a function to track the time
  function timeTrack() {
    // creating a variable today 
    var timeNow = dayjs().hour() 
    
    // grabbing the class time-block creating a function to compare the time block to the timeNow
    $(".time-block").each(function() {
      // created the variable block time to use it with in the conditional statement
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);

      // using a conditional statement to compare blockTime to timeNow
      // if block time is less then  time now add class "past"
      if(blockTime < timeNow) {
        $(this).removeClass("future")
        $(this).removeClass("present")
        $(this).addClass("past")
      } 
      // if block time is equal to time now add class "present"
      else if(blockTime === timeNow) {
        $(this).removeClass("future")
        $(this).removeClass("past")
        $(this).addClass("present")
      }
      // if block time is more then time now add class "future"
      else {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
      }
    });
  }


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: 
  // How can the id attribute of each time-block be used to do this?



  //
  // TODO: Add code to display the current date in the header of the page.

  // add variable currentDay equaling dayjs and formatting it to display the way i want it to(full day name, full month name, number of day with the th)
  var currentDay = dayjs().format('dddd MMMM D[th],');
  // used jquery to grab the paragraph element with currentDay id and add text of the currentDay variable
  $('#currentDay').text(currentDay);



});