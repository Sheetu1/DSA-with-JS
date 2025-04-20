
console.log("------WELCOME TO MY CALCULATOR------");

var operation, a, b, ans;
do{
    //Choosing an opeartion
    operation = Number(prompt("Choose the operation:\n 1.Addition\n2.Substraction\n3.Product\n4.Division\n5.Exit"));

    switch(operation){
        case 1: {
            a = Number(prompt("Enter first number: "));
            b = Number(prompt("Enter second number: "));
            ans = a+b;
            console.log("Sum = " , ans);
            break;
        }
        case 2: {
            a = Number(prompt("Enter first number: "));
            b = Number(prompt("Enter second number: "));
            ans = a-b;
            console.log("Substraction = " , ans);
            break;
        }
        case 3: {
            a = Number(prompt("Enter first number: "));
            b = Number(prompt("Enter second number: "));
            ans = a*b;
            console.log("Product = " , ans);
            break;
        }
        case 4: {
            a = Number(prompt("Enter first number: "));
            b = Number(prompt("Enter second number: "));
            ans = a/b;
            console.log("Division = " , ans);
            break;
        }
        case 5: {
            console.log("Program Exit.")
        }
    }
}while(operation!=5);


