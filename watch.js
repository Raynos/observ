module.exports = watch

function watch(observable, listener) {
    listener(observable())
    observable(listener)
}
