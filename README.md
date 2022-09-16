# Challenge-5

For challenge 5, we are tasked with developing a daily planner for a typical 9-5 workday. As people in the workforce get busier during their days, they will benefit from using a daily planner so that they can more effecively manage their time. This planner will use the web API Moment.js to help us highlight and track the current day and time, as well as the current hour of the day in our planner. It will tell highlight the current hour in red, the past hours in grey and future hours in green. In addition, it will allow users to track their events in local storage. 

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist