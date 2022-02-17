try {
  c = a + b;
} catch (exception) {
  console.log(exception.name);
} finally {
  console.log('f');
}

const array = [12, 6, 22, 0, -8];

function getModifiedArray(array) {
  const newArray = [...array]
  newArray.shift();
  newArray.pop();
  newArray.unshift('Start');
  newArray.push('End');
  return newArray;
 
}
console.log(getModifiedArray(array));

function getModifiedArray(array) {
  const newArray = [...array]
 newArray[0] = 'Start';
 newArray[newArray.length -1] = 'End';
 if( newArray.length < 2) {
   return
 }
 return newArray;
}

combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]));  // [12, 22, -8, 6, 15]

const arr1 = [12, "User01", 22, true, -8]
const arr2 = ["Index", 6, null, 15]
function combineArray(arr1, arr2) {
  const newArray = [...arr1, ...arr2]
  return newArray.filter(item => typeof item === 'number')
  
}
console.log(combineArray(arr1, arr2));