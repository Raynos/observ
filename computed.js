var Observable = require("./index.js")

module.exports = computed

function computed(observables, lambda) {
    var values = observables.map(function (o) {
        return o()
    })
    var result = Observable(lambda.apply(null, values))

    observables.forEach(function (o, index) {
        o(function (newValue) {
            values[index] = newValue
            result.set(lambda.apply(null, values))
        })
    })

    return result
}
