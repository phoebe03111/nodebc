function sort(n1, n2, n3, highToLow) {    
    if (n1 <= n2 && n1 <= n3) {
        if (n2 <= n3) {
            if (!highToLow) {
                console.log(n1, n2, n3);  
            } else {
                console.log(n3, n2, n1); 
            }
        } else {
            if (!highToLow) {
                console.log(n1, n3, n2); 
            } else {
                console.log(n2, n3, n1);  
            }
        }
        return; 
    } 
    if (n2 <= n1 && n2 <= n3) {
        if (n1 <= n3) {
            if (!highToLow) {
                console.log(n2, n1, n3); 
            } else {
                console.log(n3, n1, n2);
            }
        } else {
            if (!highToLow) {
                console.log(n2, n3, n1); 
            } else {
                console.log(n1, n3, n2);
            }
        }  
    }
    if (n3 <= n1 && n3 <= n2) { 
        if (n1 <= n2) { 
            if (!highToLow) {
                console.log(n3, n1, n2);
            } else {
                console.log(n2, n1, n3);
            }             
        } else {
            if (!highToLow) {
                console.log(n3, n2, n1);  
            } else {
                console.log(n1, n2, n3); 
            }
        }
    }
}

sort(10,8,25,true);
sort(41,269,20,false);
sort(2,2,2,true);
sort(8,47,13,true);
sort(391,747,1019,false);
sort(1,1,1,false);
sort(1,1,1,true);
sort(91,91,14,false);
sort(-7,1,7,true);
sort(-7,1,7,false);