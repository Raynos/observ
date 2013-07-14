# observ

[![build status][1]][2] [![NPM version][3]][4] [![Davis Dependency status][9]][10]

[![browser support][11]][12]

A observable value representation

## Example

```js
var Observable = require("observ")

var v = Observable("initial value")
v(function onchange(newValue) {
  assert.equal(newValue, "new value")
})
v.set("new value")

var curr = v()
assert.equal(curr, "new value")
```

## Docs

```ocaml
type Observable<A> := {
    () => A &
    (Function<A>) => void,
    set: (A) => void
}

observ := (A) => Observable<A>
```


## Installation

`npm install observ`

## Contributors

 - Raynos

## MIT Licenced

  [1]: https://secure.travis-ci.org/Raynos/observ.png
  [2]: https://travis-ci.org/Raynos/observ
  [3]: https://badge.fury.io/js/observ.png
  [4]: https://badge.fury.io/js/observ
  [5]: https://coveralls.io/repos/Raynos/observ/badge.png
  [6]: https://coveralls.io/r/Raynos/observ
  [7]: https://gemnasium.com/Raynos/observ.png
  [8]: https://gemnasium.com/Raynos/observ
  [9]: https://david-dm.org/Raynos/observ.png
  [10]: https://david-dm.org/Raynos/observ
  [11]: https://ci.testling.com/Raynos/observ.png
  [12]: https://ci.testling.com/Raynos/observ
