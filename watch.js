module.exports = watch

function watch(observable, listener) {
    var remove = observable(listener)
    listener(observable())
    return remove
}
