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