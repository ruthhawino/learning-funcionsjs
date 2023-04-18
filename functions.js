



//create a funcion of arrays and return the reversed elements
  function reversed(arr) {
    let reversed =[];
    for (let y = arr.length -1; y >=0; y--){
        reversed.push(arr[y]);
    }
    return reversed;
  }
  let myArray =["food",12,"eat","cold",54];
  let reversedArray = reversed(myArray);
  console.log(reversedArray);