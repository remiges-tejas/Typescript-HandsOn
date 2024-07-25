const User = {
  name: "Tejas",
  email: "bisentejas4@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "Tejas", isPaid: false });

// objects return a object : func () : {obj params } { return obj;}
function createCourse(): { name: string; isPaid: boolean; price: number } {
  return { name: "React Js", isPaid: false, price: 999 };
}




export {};
