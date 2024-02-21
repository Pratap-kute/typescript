function addTwo(number: number): number {
  return number + 2;
}
addTwo(2);

const addThree = (number: number): number => {
  return number + 3;
};

console.log(addThree(3));
const hero = ["superman", "batman", "spiderman"];

hero.map((name: string) => {
  return name + " is a hero";
});
