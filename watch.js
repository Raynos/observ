module.exports = watch

function watch(observable, listener) {
    observable(listener)
    listener(observable())
}
