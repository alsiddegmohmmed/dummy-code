// arr = [3, 2, 1, 13, 8, 5, 0, 1]
// mergesort() takes an array for argument
// check if array.length <= 1 
// return array

function mergesort(arr) {
    if ( arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2 ); 
    const leftarray = arr.slice(0, middle); 
    const rightarray = arr.slice(middle); 

    const leftsort = mergesort(leftarray)
    const rightsort = mergesort(rightarray)

   return merge(leftsort, rightsort)

}

function merge (left, right) {
    //compare the two arrays to merge them
    // declare two var i and j to act as indices 
   const sortedarr = []; 

   let i = 0; 
   let j = 0; 
   while (i < left.length && j < right.length) {
   
   if (left[i] < right[j]) {
    sortedarr.push(left[i]);
    i++;
   } else {
    sortedarr.push(right[j])
    j++;
   }
}
  return sortedarr.concat(left.slice(i)).concat(right.slice(j));; 
}

const arr1 = [3, 2, 1, 13, 8, 5, 0, 1];
const sortedArr1 = mergesort(arr1);
console.log(sortedArr1); 


//split the array 
//middle = arr.length / 2; 
//leftarray = arr.sort(0, middle)
// rightarray = arr.sort(middle)

// recursively sort each half 

//leftsort = mergesort(leftarray)
// rightsort = mergesort(rightarray)

//merge the sorted halves 
// return merge (leftsort, rightsort)
//

