var Observable = require("./index.js")

module.exports = ObservableSource

function ObservableSource(generator, initialValue) {
    var o = Observable(initialValue)
    generator(o.set)
    return o
}
