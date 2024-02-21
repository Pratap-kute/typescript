// const User = {
// name: "John",
// email: "test@test.com",
// isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}
// createUser({ name: "John", isPaid: true });

function createCourse(): { name: string; price: number } {
  return { name: "React", price: 100 };
}

// type User = {
// name: string;
// email: string;
// isActive: boolean;
// };

function createUser(user: User): User {
  return user;
}

// createUser({ name: "John", email: "John@test.com", isActive: true });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditcard?: number;
};

type cardNumber = { cardNumber: number };
type cardDate = { cardDate: Date };
type cardDetail = cardNumber &
  cardDate & {
    cvv: number;
  };

let user: User = {
  _id: "123",
  name: "John",
  email: "h@test.com",
  isActive: true,
};
