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

//Array of generic type
function getSearchProduct<Type>(products: Array<Type>): Type {
  return products[0];
}

// Genrics with
const getMoreSearchProduct = <Type>(products: Array<Type>): Type => {
  //do some data base operation
  const myIndex = 0;
  return products[myIndex];
};
