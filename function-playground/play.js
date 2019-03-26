import {
  forEach,
  forEachObject,
  unless,
  every,
  some,
  unary
} from '../lib/es6-functional'

/**
 * forEach
 */
// let array = [1,2,3]
// forEach(array,(data) => console.log(data))

// console.log('********乘以2**********')
// forEach(array, data => console.log(data*2))

/**
 * forEachObject
 */
let object = {a:1,b:2}
class newObjectFn {
  constructor () {
    this.c = 3
  }
}
newObjectFn.prototype = object
let newObject = new newObjectFn() 
// forEachObject(newObject, (key, value) => console.log(`${key}是${value}`))

/**
 * unless
 */
// forEach(array, (value) => {
//   unless(value%2, () => {
//     console.log(`${value} 是偶数`)
//   })
// })

/**
 * every
 */
// console.log(every([NaN, NaN, NaN,],isNaN))
// console.log(every([NaN, NaN, 4,],isNaN))

/**
 * some
 */
// console.log(some([1,NaN,3],isNaN))
// console.log(some([1,2,3],isNaN))

/**
 * unary
 */
let array = ['1', '2', '3']
console.log(array.map(parseInt))
console.log(array.map(unary(parseInt)))

