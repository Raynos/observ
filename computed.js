var Observable = require("./index.js")

module.exports = computed

function computed(observables, lambda) {
    var values = []

    function listener(i) {
        return function (value) {
            values[i] = value
            result.set(lambda.apply(null, values))
        };
    }

    for (var i = 0, len = observables.length; i < len; i++) {
        values.push(observables[i]())
        observables[i](listener(i))
    }

    var result = Observable(lambda.apply(null, values))

    return result
}
