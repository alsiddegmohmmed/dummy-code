function sumRange(n,total = 0) {
    if ( n <= 0 ) {
        return total
    } else {
        return sumRange( n -1 , total + n ); 
    }
}


function power( n , x ) {
    if (x == 0) {
        return 1; 
    } else {
        return n * power( n , x - 1 ); 
    }
}


function fact(n,total = 1) {
    if ( n <= 0 ) {
        return total
    } else {
        return fact( n -1 , total * n ); 
    }
}