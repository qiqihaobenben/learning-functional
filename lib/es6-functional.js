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