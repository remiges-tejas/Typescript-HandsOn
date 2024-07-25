type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

function createUser(u: User) {
  return { name: "", email: "", isActive: false };
}

let myUser: User = {
  _id: "12345",
  name: "Tejas Bisen",
  email: "bisenteja@gmail.com",
  isActive: true,
};

myUser.email = "h@gmail,com";

// myUser._id= 23232
// passing object value inside the function
createUser(myUser);

type cardNumber = {
  cardnumber: String;
};

type cardDate = {
  cardDate: String;
};

type cardDetailw = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};
