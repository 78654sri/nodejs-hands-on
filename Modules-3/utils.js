function capitalize(str){
    return str.charAT(0).toUpperCase() + str.splice(1);
}

function reverseString(str){
    return str.split(" ").reverse().join('');
}

function sortArray(arr) {
    return arr.sort((a, b) => a - b);
  }