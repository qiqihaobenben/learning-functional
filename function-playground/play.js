import {
  forEach,
  forEachObject,
  unless,
  every,
  some,
  unary,
  once,
  memorized,
  map,
  filter,
  concatAll,
  reduce,
  zip,
  carry,
  partial,
  compose
} from '../lib/es6-functional'
// import {arrayUtils} from '../lib/es6-functional'

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
// let object = {a:1,b:2}
// class newObjectFn {
//   constructor () {
//     this.c = 3
//   }
// }
// newObjectFn.prototype = object
// let newObject = new newObjectFn() 
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
// let array = ['1', '2', '3']
// console.log(array.map(parseInt))
// console.log(array.map(unary(parseInt)))

/**
 * once
 */
// let doPayment = once(() => {
//   console.log('payment is done')
// })
// console.log('第一次')
// doPayment()
// console.log('第二次')
// doPayment()

/**
 * memorized
 */
// let factorial = memorized((number) => {
//   if(number === 1) {
//     return 1
//   }
//   return number * factorial(number - 1)
// })

// console.time('1')
// console.log(factorial(20))
// console.timeEnd('1')
// console.time('2')
// console.log(factorial(21))
// console.timeEnd('2')

/**
 * map
 */
// console.log(map([1,2,3],(value) => value * value))

/**
 * filter
 */

//  console.log(filter([1,2,3,4],value => value > 2))

/**
 * concatAll
 */
// console.log(concatAll([[1,2,3],[4,5,6]]))

/**
 * reduce
 */
// console.log(reduce([1,2,3], (accumlator,value) => accumlator + value))

/**
 * zip
 */
// console.log(zip([1,2,3],[4,5],(x,y) => x*y))

/**
 * carry
 */

//  const multiply = (x,y,z) => x * y * z;
//  console.log(carry(multiply)(2)(3)(4))

/**
 * partial
 */
// let delayTenMs = partial(setTimeout,undefined,3000)
// delayTenMs(() => {
//   console.log("DO Y task1") 
//   delayTenMs(() => {
//     console.log("DO Y task2")
//   })
// })

/**
 * compose
 */
let getNumberLt5 = partial(filter,undefined,(value) => value.number > 5)
let getName = partial(map,undefined,(value) => value.name)
let data = [{
  name: 123,
  number: 4
}, {
  name: 333,
  number: 10
}, {
  name: 567,
  number: 6
}, {
  name: "sss",
  number: 7
}, {
  name: "eee",
  number: 3
}, ]

let getLt5Name = compose(getName,getNumberLt5)
console.log(getLt5Name(data))
