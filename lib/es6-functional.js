export const forEach = (array,fn) => {
  let i;
  for(i=0;i<array.length;i++) {
    fn(array[i])
  }
}

export const forEachObject = (object,fn) => {
  for(var property in object) {
    if(object.hasOwnProperty(property)) {
      fn(property, object[property])
    }
  }
}

export const tap = (value) => {
  return (fn) => {
    typeof fn === 'function' && fn(value)
    console.log(value)
  }
} 

export const unless = (predicate, fn) => {
  if(!predicate)
    fn()
}

export const every = (array, fn) => {
  let result = true
  for(let i=0; i < array.length; i++){
    result = result && fn(array[i])
  }
  return result
}

export const some = (array, fn) => {
  let result = false
  for(let value of array)
    result = result || fn(value)
  return result
}

export const unary = (fn) => 
  fn.length === 1
    ? fn 
    : (arg) => fn(arg)

export const once = (fn) => {
  let done = false
  return () => {
    done ? undefined : ((done = true), fn.apply(this,arguments))
  }
}

export const memorized = (fn) => {
  let lookupTable = {}
   return (arg) => lookupTable[arg] || (lookupTable = fn(arg)) 
}

export const map = (array,fn) => {
  let result = []
  for(let value of array) {
    result.push(fn(value))
  }
  return result
}

export const filter = (array,fn) => {
  let result = []
  for(const value of array)
    fn(value)? result.push(value): void(0)
  return result
}

export const concatAll = (array) => {
  let result = []
  for(let value of array)
    result.push.apply(result,value)
  return result
}

export const reduce = (array,fn,initialValue) => {
  let accumulator;
  if(initialValue != undefined)
    accumulator = initialValue
  else
    accumulator = array[0]

  if(initialValue === undefined)
    for(let i = 1; i < array.length; i++)
      accumulator = fn(accumulator, array[i])
  else
    for(let value of array)
      accumulator = fn(accumulator,value)
  return accumulator
}

export const zip = (LeftArr,RightArr,fn) => {
  let index,results=[];
  let length = Math.min(LeftArr.length,RightArr.length)
  for(index = 0; index < length; index++)
    results.push(fn(LeftArr[index],RightArr[index]))
  return results;
}

export const curry = (fn) => {
  if(typeof fn !== 'function') {
    throw Error('No function provided')
  }
  return function curryFn(...args) {
    if(args.length < fn.length) {
      return function () {
        return curryFn.apply(null,args.concat(Array.from(arguments)))
      }
    }else {
      return fn.apply(null,args)
    }
  }
}

export const partial = function (fn, ...partialArgs) {
  return function (...fullArguments) {
    let args = partialArgs
    let arg = 0;
    for(let i = 0; i < args.length && arg < fullArguments.length; i++) {
      if(args[i] === undefined) {
        args[i] = fullArguments[arg++]
      }
    }
    return fn.apply(null,args)
  }
}

export const identity = (value) => {
  console.log(value)
  return value
}

export function compose (a,b) {
  return (c) => a(b(c))
}

export function composeN (...fns) {
  return (value) => reduce(fns.reverse(),(acc,fn) => fn(acc), value)
}

export const pipe = (...fns) => (value) => reduce(fns,(acc,fn) => fn(acc),value)

export const Container = function (value) {
  this.value = value
}
Container.of = function (value) {
  return new Container(value)
}
Container.prototype.map = function (fn) {
  return Container.of(fn(this.value))
}

export const MayBe = function (value) {
  this.value = value
}
MayBe.of = function (value) {
  return new MayBe(value)
}
MayBe.prototype.isNoting = function () {
  return this.value === null || this.value === undefined;
}
MayBe.prototype.map = function(fn) {
  return this.isNoting()?MayBe.of(null):MayBe.of(fn(this.value))
}



