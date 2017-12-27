var log = console.log.bind(console)

var e = (selector) => {
    return document.querySelector(selector)
}

var bindEvent = (element, eventName, callback) => {
    element.addEventListener(eventName, function(event) {
        callback(event)
    })
}
