class User {
  readonly city: string = "";
  constructor(
    public email: string,
    public age: number,
  ) {}
}

const test = new User("test@test.com", 25);
// test.city = "New York";
