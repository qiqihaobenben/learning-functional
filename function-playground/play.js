import {
  forEach,
  forEachObject,
  tap,
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
  curry,
  partial,
  compose,
  composeN,
  pipe,
  identity,
  Container,
  MayBe
} from '../lib/es6-functional'
// import {arrayUtils} from '../lib/es6-functional'

/**
 * forEach
 */
// let array = [1,2,3]
// forEach(array,(data) => console.log(data))

// console.log('********乘以2**********')
// forEach(array, data => console.log(data*2))

// console.log('********tap**********')
// forEach(array, data => {
//   tap(data)(() => {
//     console.log(data + data)
//   })
// })

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
// console.log(reduce([1,2,3], (accumulator,value) => accumulator + value))

/**
 * zip
 */
// console.log(zip([1,2,3],[4,5],(x,y) => x*y))

/**
 * curry
 */

//  const multiply = (x,y,z) => x * y * z;
//  console.log(curry(multiply)(2)(3)(4))

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

// let prettyPrintJson = partial(JSON.stringify,undefined,null,2)
// console.log(prettyPrintJson({name:'fangxu',gender:'male'}))

/**
 * compose
 */
// let getNumberLt5 = partial(filter,undefined,(value) => value.number > 5)
// let getName = partial(map,undefined,(value) => value.name)
// let data = [{
//   name: 123,
//   number: 4
// }, {
//   name: 333,
//   number: 10
// }, {
//   name: 567,
//   number: 6
// }, {
//   name: "sss",
//   number: 7
// }, {
//   name: "eee",
//   number: 3
// }, ]

// let getLt5Name = compose(getName,getNumberLt5)
// console.log(getLt5Name(data))

/**
 * composeN
 */
// let splitIntoSpace = (str) => str.split(' ')
// let count = (array) => array.length
// let oddOrEven = (count) => count % 2 === 0 ? 'even' : 'odd'
// const countWords = composeN(count, splitIntoSpace)
// const countWordsAndType = composeN(composeN(oddOrEven, identity, count), identity, splitIntoSpace)
// console.log(countWords('make smaller or less in amount'))
// console.log(countWordsAndType('make smaller or less in amount'))

/**
 * pipe
 */
// let splitIntoSpace = (str) => str.split(' ')
// let count = (array) => array.length
// let oddOrEven = (count) => count % 2 === 0 ? 'even' : 'odd'
// const countWords = pipe(splitIntoSpace,count,oddOrEven)
// console.log(countWords('make smaller or less in amount'))



/**
 * generator
 */
// function* gen () {
//   return 'first generator';
// }

// let generatorResult = gen()
// console.log(generatorResult.next())

// function* sayFullName() {
//   let firstName = yield;
//   let lastName = yield;
//   console.log(firstName + lastName)
// }

// let fullName = sayFullName()
// fullName.next()
// console.log(fullName.next('chen'))
// fullName.next('fangxu')

// function* main() {
//   let a = yield 2;
//   console.log('a : ',a)
//   let dataOne = yield getDataOne()
//   let dataTwo = yield getDataTwo()
//   console.log('data one: ',dataOne)
//   console.log('data two: ',dataTwo)
// }
// let generator = main()
// function getDataOne() {
//   setTimeout(() => {
//     generator.next('dummy one')
//   }, 1000);
// }
// function getDataTwo() {
//   setTimeout(() => {
//     generator.next('dummy two')
//   }, 2000);
// }
// generator.next()
// generator.next()


/**
 * Container
 */
// let double = x => x + x;
//  console.log(Container.of(3).map(double))
//  console.log(Container.of(3).map(double).map(double).map(double))


/**
 * MayBe函子
 */
// let value = 'string';

// function upperCase(value) {
//   // 为了避免报错，我们得写这么一个判断
//   if (value != null || value != undefined)
//     return value.toUpperCase()
// }

// console.log(upperCase(value))

// console.log(MayBe.of(value).map(upperCase))
// let nullValue = null
// console.log(MayBe.of(nullValue).map(upperCase))

// let joinExample = MayBe.of(MayBe.of(5));
// console.log(joinExample)
// // => MayBe { value: MayBe { value: 5 } }
// console.log(joinExample.map((insideMayBe) => {
//   return insideMayBe.map((value) => value + 4)
// }))
// // => MayBe { value: MayBe { value: 9 } }

// let joinExample2 = MayBe.of(MayBe.of(5));
// console.log(joinExample2)
// // => MayBe { value: MayBe { value: 5 } }
// console.log(joinExample2.join().map((value) => value + 4))
// // => MayBe { value: 9 }

let joinExample3 = MayBe.of(MayBe.of(5));
console.log(joinExample3)
// => MayBe { value: MayBe { value: 5 } }
console.log(joinExample3.chain((insideMayBe) => {
  return insideMayBe.map((value) => value + 4)
}))
// => MayBe { value: 9 }