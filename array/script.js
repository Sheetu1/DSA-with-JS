// let arr  = [];
// arr.push(10)
// arr.push('sheetal')
// arr.push(true)
// console.log(arr);
// arr.pop([2])
// console.log(arr);

// default behavior

// let arr = [];
// arr[0] =  10;
// arr[1] = 20;
// arr[5] = 50;
// console.log(arr);

// let arr = new Array(5);
// for(let i=0; i<arr.length; i++){
//     arr[i] = Number(prompt("Enter a number"))
// }
// console.log(arr);

// qs1  sum of n elements in an array
// let arr = [10,20,30,40,100]
// sum = 0;
// for(let i=0; i<arr.length; i++){
//     sum = sum+arr[i];
// }
// console.log(sum);

// let arr = new Array(5);
// for(let i=0; i<arr.length; i++){
//     arr[i] = Number(prompt('Enter any number'));
// }
// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     sum = sum + arr[i];
// }
// console.log(sum);

// qs2  maximum number of an element

// let arr = [10,20,35,12,180,245]
// let max = arr[0]
// for(let i=1; i<arr.length; i++){
//    if( max < arr[i]){
//     max = arr[i];
//    }
// }
// console.log(max);

// qs3  minimum number of an element

// let arr = [10,20,35,12,180,245,5]
// let min = arr[0]
// for(let i=1; i<arr.length; i++){
//    if( min > arr[i]){
//     min = arr[i];
//    }
// }
// console.log(min);

// qs4 2nd maximum number

// let arr = [10,20,50,68,22,44]
// let max = Math.max(arr[0],arr[1])
// let smax = Math.min(arr[0],arr[1])

// for(let i=2; i<arr.length; i++){
//     if(arr[i]>max){
//         smax = max;
//         max = arr[i];
//     }
//     else if(arr[i] > smax && max!= arr[i]){
//         smax = arr[i];
//     }
// }
// console.log(smax);

// qs5 2nd minimum number
let arr = [1, 20, 50, 68, 88, 74, 12, 5];

let min = Infinity;
let smin = Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    smin = min;
    min = arr[i];
  } else if (arr[i] > min && arr[i] < smin) {
    smin = arr[i];
  }
}
console.log("Second minimum:", smin);

// qs6 reverse an array
// let arr = [10,20,30,40,50]
// let i=0, j=arr.length-1;
// while(i!=j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
// }
// console.log(arr);

// qs7 two pointer based zero values and 1 values

// let arr = [1,1,0,1,0,1,1,0,0]
// let i =0 ,j =0;
// while(i<arr.length){
//     if(arr[i]==0){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++;
//     }
//     i++;
// }
// console.log(arr);

// qs8 move the all negative element left side and positive element move the right side

// let arr = [-1,2,3,4,-5,-6,7,8,,9,-10]

// qs-9
