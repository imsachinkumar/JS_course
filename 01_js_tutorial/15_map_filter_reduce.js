//ARRAY MAP METHOD


let arr=[23,4,5,323,45,78]

a1=arr.map((value)=>{
    console.log(value)

})
console.log(a1)


let arr2=[23,4,5,323,45,78]

a2=arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value+index

})
console.log(a1)



//ARRAY FILTER METHOD

let arr3=[23,45,6,7,9,10]

let a4=arr3.filter((a4)=>{
    return a4>10

})
console.log(a4)



//REDUCE

