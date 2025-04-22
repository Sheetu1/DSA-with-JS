//  let name = "sheetal";
//  console.log(name);
// console.log(name[1]);
// name = name + "sharma";  direct change nhi kr skte immutable hoti h string but reassign krke valaue me changes kr skte h
//  console.log(name);

// console.log(name.length);  length property h without bracess use krte h baki sb methods h js me
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.slice(1,5)); starting index to as a tis aa jaati h lekin last me ek extra dena pdta h ise positive or negative dono ke liye use krte h
// console.log(name.slice(-6,name.length)); negative me
// console.log(name.substring(1,5)); starting andd ending part ka  new string deti h dono slice and substring bs slice positive negetive dono ke liye or substring only postive values ke liye use krte hai
// console.log(name.substring(1)); and substring me last index nhi denge to to vah last tk pick kr lega lekin slice me dono dene pdte h
// console.log(name.concat(" " + "Sharma"));
// let name =    "sheetal      "
// console.log(name.trim());

// let name = "sheetal";
// console.log(name.charAt(4)); return character of indexis
// console.log(name.charCodeAt(2)); return integer of character

// qs1 print each charcter on new line
//  let name = "Sheetal";
//  for(let i=0; i<name.length; i++){
//     console.log(name[i]);
//  }

// qs2 print in reverse order
// let name = "Sheetal";
// for(let i=name.length-1; i>=0; i--){
//     console.log(name.charAt(i));
// }
// qs2 print in reverse order "lateehs"
// let name = "Sheetal";
// let rev = "";
// for(let i=name.length-1; i>=0; i--){
// rev = rev + name.charAt(i);
// }
// console.log(rev);

// // qs3 check if string is pallindrom or not(forward and backward same read that is pallindrom)
// let str = prompt("Enter any string");
// let isPallindrome = true;
// let i=0, j=str.length-1;
// while (i < j) {
//   if (str.charAt(i) != str.charAt(j)) {
//     isPallindrome = false;
//     break;
//   }
//   i++;
//   j--;
// }
// if (isPallindrome) {
//   console.log("Pallindrome");
// } else {
//   console.log("Not Pallindrome");
// }

// qs-4 toggle the given string
let str = prompt("Enter any String");
console.log(str);
let toggle = "";
for(let i = 0; i < str.length; i++) {
    let ch = str.charCodeAt(i);
    if(ch >= 65 && ch <= 90) {
        toggle = toggle + String.fromCharCode(ch + 32);  // Upper to lower
    }
    else if(ch >= 97 && ch <= 122) {
        toggle = toggle + String.fromCharCode(ch - 32);  // Lower to upper
    }
}
console.log(toggle);

// qs-5 Frequency of each characters
//  ex-> hello
// h-1
// e-1
// l-2
// o-1
// konsa charcter kitni bar aya h

// let str = prompt("Enter any String");
// let arr = new Array(128).fill(0);
// for(let i = 0; i< str.length-1; i++){
//     let idx = str.charCodeAt(i);
//     arr[idx] = arr[idx] + 1;
// }
// for(let i = 0; i< str.length-1; i++){
//     if(arr[i]>0){
//         console.log(String.fromCharCodeAt(i) + "Appears at" + arr[i] + "times");
//     }
// }
