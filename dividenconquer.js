function mergeSort(arr) {
    if (arr.length <= 1) return arr; // Caso base
    // Dividir
    const mid = Math.floor(arr.length / 2);
    
    console.log(arr);
    
    const left = mergeSort(arr.slice(0, mid));
    console.log(left);
    const right = mergeSort(arr.slice(mid));
    console.log(right);
        

    // Combinar
    return merge(left, right);
}

function merge(left, right) {
    console.log(`entrando al merge ${left} y ${right}`);
    
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
            console.log(result);
            
        } else {
            result.push(right[j++]);
            console.log(result);
        }
    }
    
    
    console.log(`${i} y ${j}`);
    
    // Añadimos elementos restantes
    return result.concat(left.slice(i)).concat(right.slice(j));
    
}

// Ejemplo de uso

const array = [5, 2, 9, 1, 5, 6, 10];

// console.log(mergeSort(array))

//Dado un arreglo de números, implementa una función que utilice el enfoque Divide and Conquer para encontrar el número máximo.
function numMax(arr) {
    console.log('------start');
    
    if(arr.length <= 1){
        console.log('caso base');
        
        return arr[0];
    }
    console.log(arr);
    let mid = Math.floor(arr.length/2);

    let arrLeft = numMax(arr.slice(0,mid));
    console.log(`L ${arrLeft}`);

    let arrRight = numMax(arr.slice(mid));
    console.log(`R ${arrRight}`);

   
    console.log(`antes del if ${arrLeft} y ${arrRight}`);
    if (arrLeft > arrRight) {
        noMax = arrLeft;  
        console.log(`num max es ${noMax}`); 
        }else{
        noMax = arrRight;
        console.log(`num max es: ${noMax}`);
        }
        console.log('----------');
        
   return noMax;
}
const numbers = [101, 600, 456,123];
console.log(numMax(numbers));




//usando metodo max de js
function findMaxDC(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
   
    const mid = Math.floor(arr.length / 2);
    const leftMax = findMaxDC(arr.slice(0, mid));
    const rightMax = findMaxDC(arr.slice(mid));

    return Math.max(leftMax, rightMax);
}

const numberss = [3, 8, 2, 10, 5, 7];
console.log(findMaxDC(numberss));

const negativeNumbers = [-5, -2, -10];
console.log(findMaxDC(negativeNumbers));
