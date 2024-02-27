function fibs (n) {
    const arr = []; 
    for (let i = 0; i <= n; i++) {
        if (i === 0) {
             arr.push(i)
        } 
        else if (i === 1) {
             arr.push(i);
        } 
        else {
            
            arr.push(i + (i - 1)); 
            
        }
    }
    console.log(arr); 
}

console.log(fibs (2)); 




