function hasTargetSum(array, target) {
  for(const number of array) {
    let newArray = [...array]
    let i = array.indexOf(number)
    newArray.splice(i, 1)
    let sumArray = newArray.map(x => x + number)
    for(const number of sumArray) {
      if (number === target) {
        return true
      }
    }
  }
  return false
}

//^What I ended up having to do was, for each number in the original array, create a copy of the array 
// and then remove that number from the copy so it doesn't add itself, and from that array, created a new array
// with the map method of the sums of the numbers in the copy array and the number removed, then i took that array, 
// and checked each value against the target for a match




//We don't want the number in the array to add itself, and this one doesn't but it also won't add
//other numbers in the array that are equal to itself... i may have to go back to my original idea of 
//creating an array.map and check the array of sums against the target
/*function hasTargetSum(array, target) {
  for(const number of array) {
    for(i = 0; i < array.length; i++) {
      if(number === array[i]) {
        continue
      } else if(number + array[i] === target) {
          return true
      }
    } 
  }  return false
}

//My first goal here is to make sure im able to iterate through the array and get the corresponding numbers
/*function cycleArray(array) {
  for(i = 0; i < array.length; i++) {
    console.log(array[i]);
  }  
}
//Checks for this work, so next is to move on to taking this and having it add a number from the array
function addArray(array) {
  for(i = 0; i < array.length; i++) {
    console.log(array.map(x => x + array[i]))
  }
}  
// ^This prints an array of sums for each number in the array, so next is to check each of those against a target number
function checkTarget(array, target) {
  for(const number of array) {
    if(number === target) {
      return true
    }
  }
  return false
}
// ^This is working, next is to combine all three steps
function combineSteps(array, target) {
  for(i = 0; i < array.length; i++) {
    let sumArray = array.map(x => x + array[i])
    console.log(sumArray);
    for(const number of sumArray) {
      if(number === target) {
        return true
      }
    }
  }
  return false
}
//^This is working correctly, the next step is to see if we can clean it up and optimize it in any way,
// then move it to the intended function

/* 
  Write the Big O time complexity of your function here
  function hasTargetSum(array, target) {
    ** n step
  for(const number of array) {
    ** 1 step
    let newArray = [...array]
    ** 1 step
    let i = array.indexOf(number)
    newArray.splice(i, 1)
    ** n step
    let sumArray = newArray.map(x => x + number)
    ** n step
    for(const number of sumArray) {
      if (number === target) {
        return true
      }
    }
  }
  return false
}
Originally we get O(n * 3 + 2), then removing the constants gives us O(n)
*/

/* 
  Add your pseudocode here
  for every number in the array, go through and add every other number one at a time, 
  and check against a target number to return true or false

*/

/*
  Add written explanation of your solution here
  What i've done is iterate through each number in the array, take that number and iterate
  through the rest of the array, add each number, and check that result against the target, if the 
  target is found, it returns true, if no target is found, returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
