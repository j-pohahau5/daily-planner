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

  $(".saveBtn").on("click", function() {
    var description = $(this).sibling(".description").val()
    var time = $(this).parent().attr("id")

    localStorage.setItem(time, description)
  })
  
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: 
  // How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes?
  //  How can Day.js be used to get the current hour in 24-hour time?
  


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