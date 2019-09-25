const googleCalendarApi = require('./../middlewares/GoogleCalendarApi');

function createEvent (){
    googleCalendarApi.createEvent();
}

function deleteEvent() {

}

function getAllEvents() {
    googleCalendarApi.listEvents();
}