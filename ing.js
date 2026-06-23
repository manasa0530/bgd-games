// console.log(typeof null);
// console.log(typeof undefined);

//reverse str
// function reversestr(str){
//     return str.split('').reverse().join("");
// }
// console.log(reversestr("hello"));

//large in array
// const mx=(arr)=>{
//     return Math.max(...arr);
// }
// console.log(mx([10,50,90,60]));

//palindrome
const palin=(str)=>{
    str==str.split('').reverse().join('');
    return "the give $str is true"+{str}
}
console.log(palin("madam"));