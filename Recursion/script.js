// function Temp(n){
//     if(n == 0) return;
//     console.log('Hello world');
// }
// Temp(0);

// print hello n times 

function PrintHello(n){
    if(n ==0) return;
    console.log('Hello world');
    PrintHello(n-1);
}
PrintHello(5);