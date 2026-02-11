//LECTURE 11
//TASK 3 SOLUTUON 1

let urlString = "https://phegon.com/course?id=12332";

let splitResult = urlString.split("id="); //split into arry of two parts, the 2nd containing the id value
// console.log(splitResult)

let courseId = splitResult[1];
console.log("Course Id Is: " + courseId);

//TASK 3 SOLUTION 2
let actualUrl = new URL(urlString);
let courseId2 = actualUrl.searchParams.get("id");

console.log("Course Id Solution B Is: " + courseId2);

//TASK 4 SOLUTUON 1

function isStrongPassword(password) {
  //1 check if password length is greater than 6
  const isLongEnough = password.length > 6;

  //2 chack if password has a lowercase letter
  const hasLowercase = /[a-z]/.test(password);

  //3 chack if password has a uppercase letter
  const hasUppercase = /[A-Z]/.test(password);

  /*You can use this to check if it has any letters either uppercase or lowercase
  const hasLetter = /[a-zA-Z]/.test(password); */

  //4 check if it has a number
  const hasNumber = /[0-9]/.test(password);

  //5 check if it has a special character
  const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

  return isLongEnough && hasLowercase && hasUppercase && hasNumber && hasSpecial;
}

const result = isStrongPassword("longEnough@34");
console.log(result);

function isStrongPasswordB(pwd) {
  return (
    pwd.length > 6 &&
    /[a-z]/.test(pwd) &&
    /[A-Z]/.test(pwd) &&
    /[0-9]/.test(pwd) &&
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd)
  );
}
const result2 = isStrongPasswordB("GoodPass_1"); // true, meets all requirements 
const result3 = isStrongPasswordB("badpass_1"); // false, lacks capital letter
const result4 = isStrongPasswordB("Password1"); // false, lacks special character
const result5 = isStrongPasswordB("fjksjdfjdjf"); // fasle, only contains lower case letter
const result6 = isStrongPasswordB("54857475674"); // false, only contains numbers
const result7 = isStrongPasswordB("Sh0rt@"); // false, too short
const result8 = isStrongPasswordB("dksdj438743"); // false, lacks capital letter and special character

console.log("Task 4 solution B test: " + result2);
console.log("Task 4 solution B test: " + result3);
console.log("Task 4 solution B test: " + result4);
console.log("Task 4 solution B test: " + result5);
console.log("Task 4 solution B test: " + result6);
console.log("Task 4 solution B test: " + result7);
console.log("Task 4 solution B test: " + result8);
