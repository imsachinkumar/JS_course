//Q1
//add number in array until you enter 0;
//NOTE THIS CODE WILL RUN ON JS ONLINE COMPILER


// let arr= [12,22,32,3,3,4,54,3]
// let a;
// do{

// a=prompt("enter number")
// a=Number.parseInt(a)
// arr.push(a)

// } while(a!=0);
// console.log(arr)


//USE FILTER FUNCTION TO FIND NUBER DIV BY 10 IN ARRAY

// let arr1=[20,45,67,80,90,110]

// let arr2=arr1.filter((val)=>{
//     return val%10==0

// }
// )
// console.log(arr2)

//create an array of square of given no.

let arr3=[23,3,4,5,67,8,9]

let arr4=arr3.map((x)=>{
    return x*x

})
console.log(arr4)