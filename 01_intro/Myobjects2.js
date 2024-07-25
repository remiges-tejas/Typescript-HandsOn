"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(u) {
  return { name: "", email: "", isActive: false };
}
var myUser = {
  _id: "12345",
  name: "Tejas Bisen",
  email: "bisenteja@gmail.com",
  isActive: true,
};
myUser.email = "h@gmail,com";
// myUser._id= 23232
// passing object value inside the function
createUser(myUser);


