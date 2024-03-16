class User {
  // public, private, protected

  protected _courseCount = 5;

  readonly city: string = "";
  constructor(
    public email: string,
    public age: number,
  ) {}

  // getter and it has return type
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  // setter and it does not have return type
  set setCourseCount(courseCount: number) {
    if (courseCount < 5) {
      throw new Error("Course count should be greater than 5");
    }
    this._courseCount = courseCount;
  }
}

class Admin extends User {
  private _role: string;
  constructor(email: string, age: number, role: string) {
    super(email, age);
    this._role = role;
  }
  getRole() {
    return this._role;
  }
  changeCourseCount() {
    this._courseCount++;
  }
}

const test = new User("test@test.com", 25);
// test.city = "New York";
test.setCourseCount = 6;
