var test = require("tape")

var Observable = require("../index")
var computed = require("../computed")

test("Observable is a function", function (assert) {
    assert.equal(typeof Observable, "function")
    assert.end()
})

test("observable value", function (assert) {
    var v = Observable()
    var v2 = Observable("init")

    assert.equal(typeof v, "function")
    assert.equal(v(), null)
    assert.equal(v2(), "init")

    assert.end()
})

test("observable change", function (assert) {
    var v = Observable("init value")
    var values = []

    v(function onchange(newValue) {
        values.push(newValue)
    })

    v.set("foo")
    v.set("foo")
    v.set("bar")

    assert.deepEqual(values, ["foo", "foo", "bar"])

    assert.end()
})

test("computed observable", function (assert) {
    var v1 = Observable("one")
    var v2 = Observable("two")
    var v3 = computed([v1, v2], function (v1, v2) {
        return v1 + v2
    })
    var values = []

    v3(function onchange(value) {
        values.push(value)
    })

    assert.equal(v3(), "onetwo")

    v1.set("three")

    assert.equal(v3(), "threetwo")

    v2.set("four")

    assert.equal(v3(), "threefour")
    assert.deepEqual(values, ["threetwo", "threefour"])

    assert.end()
})
