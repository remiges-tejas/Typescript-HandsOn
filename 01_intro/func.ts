function addTwo(num: number) {
  return num + 3;
}

function getUpperCase(val: string) {
  return val.toUpperCase();
}

function signUpUser(
  name: string,
  email: string,
  pass: string,
  isPaid: boolean
) {}

// login User Function

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

signUpUser("Tejas ", "gmail.com", "wdsd2", true);
getUpperCase("Tejas Bisen");
addTwo(2);

// Avoiding Returning String Value

function addNum(val: number): number {
  return val + 3;
}

let getOutput = addNum(3);

// Part 2 Ts  Function

//  more than 1 type value if you wanted to return s

// function getVal(myVal: number)  {
//   if (myVal > 5) {
//     return true;
//   }

//   return "200 OK ";
// }

const getHello = (s: string): string => {
  return " ";
};

const heros = ["Tejas", "Bisen", "Tushar"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
  return `Hero is ${hero}`;
});

// void
function consoleEror(errmsg: string): void {
  console.log(errmsg);
}

// never
function HandleEror(errmsg: string): never {
  throw new Error(errmsg);
}
