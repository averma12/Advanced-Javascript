/*
Print all the elements of a nested array individually
*/

const arr = [1,2,3,[4,5,6,[7,8]]];


//Recursion approach
function rprint(arr) {
    if(Array.isArray(arr)){
    arr.forEach(element => {
      Array.isArray(element) ? rprint(element):  console.log(element);
     
        
    });
}
}



rprint(arr);


//Reduce approach
  function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }

  console.log(...flatten(arr));

  function *GeneratorFunction(arr) {
    for(element of arr){
        Array.isArray(element) ? yield* GeneratorFunction(element): yield element;
    }
}

//Using generators

const gen =  GeneratorFunction(arr);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

  const array = ['a', 'b', 'c', 'd', 'e'];
  const iterator = array[Symbol.iterator]();
  const first = iterator.next().value
  iterator.next().value // Since it was skipped, so it's not assigned
  const third = iterator.next().value
  iterator.next().value // Since it was skipped, so it's not assigned
  const last = iterator.next().value
  console.log(first,third,last);