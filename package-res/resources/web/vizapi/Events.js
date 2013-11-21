/*
pentaho.events

An event handler

author: James Dixon

*/

pentaho = typeof pentaho == "undefined" ? {} : pentaho;

pentaho.events = {
    // An array of event listeners
    listeners: []
};

/*
    trigger
    Triggers an event by notifying all of the listeners that the event has occurred.
*/
pentaho.events.trigger = function(source, eventName, args) {
    var listeners = pentaho.events.listeners;
    for(var lNo = 0; lNo < listeners.length; lNo++) {
        var listener = listeners[lNo];
        if(listener.object === source && listener.eventName === eventName) {
            listener.func(args);
        }
    }
};

/*
    addListener
    Adds a listener for an event
    
    source      The object to listen to
    eventName   The name of the event to listen to
    func        The function to call when the event happens
*/
pentaho.events.addListener = function(source, eventName, func) {
    pentaho.events.listeners.push({
        object:    source,
        eventName: eventName,
        func:      func
    });
};

/*
    removeListener
    Removes a listener for an event
    
    source      The object to listen to
    eventName   The name of the event to listen to (optional)
    func        The function to call when the event happens (optional)
*/
pentaho.events.removeListener = function(source, eventName, func) {
    var listeners = pentaho.events.listeners;
    var lNo = 0;
    while(lNo < listeners.length) {
        var listener = listeners[lNo];
        if(listener.object === source && 
           (!eventName || listener.eventName === eventName) &&
           (!func      || listener.func      === func     )) {
            listeners.splice(lNo, 1);
        } else {
            lNo++;
        }
    }
};

/*
    removeSource
    Removes all the listeners for the specified ibject
    
    source      The object to listen to remove
*/
pentaho.events.removeSource = function(source) {
    pentaho.events.removeListener(source);
};
