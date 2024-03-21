const score: Array<number> = [1, 2, 3, 4, 5];
const names: Array<string> = ["a", "b", "c", "d"];

// Generic are used to create reusable components
// using <Type> to define the type of the argument
function identity<Type>(arg: Type): Type {
  return arg;
}

identity(3);

// Generic types using interface
interface GenericIdentityFn {
  brand: string;
  type: string;
}

// Generic types using type interface
identity<GenericIdentityFn>({ brand: "a", type: "b" });
