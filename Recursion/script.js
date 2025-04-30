// function Temp(n){
//     if(n == 0) return;
//     console.log('Hello world');
// }
// Temp(0);

// print hello world n times 

// function PrintHello(n){
//     if(n ==0) return;
//     console.log('Hello world');
//     PrintHello(n-1);
// }
// PrintHello(100);

// print n natural numbers 

function NaturalNum(n){
    if(n == 0) return;
    console.log(n);  
    // NaturalNum(--n);
    NaturalNum(n-1);
}
NaturalNum(10);